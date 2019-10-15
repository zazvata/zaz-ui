define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'widgets/zazMenu/zazMenu',
    'common/formatter',
    'settings/settings',
    'features/userPreferences/userPreferences',
    'features/about/about',
    'intro',
    'features/ioManager',
    'features/notifications/notifications',
    'css!vendor/intro/introjs.min',
    'css!pages/index/index'
], function ($,
    HBS,
    framework,
    zazMenu,
    formatter,
    settings,
    userPreferences,
    about,
    introJs,
    ioManager,
    notifications
) {
    var index = {};

    //init method must return a promise
    index.init = function () {
        var deferred = $.Deferred();

        index.renderLayout();
        index.bindListeners();

        index.loadData();

        deferred.resolve();
        return deferred.promise();
    };

    index.renderLayout = function () {
        var strHtml;

        $('body').attr('data-lang', window.language || 'en');

        strHtml = HBS['pages/index/index']({
            language: window.language || 'en',
            items: framework.languageManager.translations(),
            viewerMode: (framework.layoutManager.pageMode === 'viewer'),
            demo: window.CONFIG.demo,
            mainbar: true
        });
        $('body').find('.__header').append(strHtml);

        strHtml = HBS['pages/index/index']({
            language: window.language || 'en',
            items: framework.languageManager.translations(),
            viewerMode: (framework.layoutManager.pageMode === 'viewer'),
            demo: window.CONFIG.demo,
            toolbar: true
        });
        $('body').find('.__toolbar').append(strHtml);
    };

    index.renderGadgets = function () {
        var gadgets = framework.pageManager.getGadgets();

        gadgets.sort(function (a, b) {
            return a.sequence - b.sequence;
        });
        framework.gadgetManager.open(gadgets);

        //this is set so that setPreferences is not called perpetually when loading page
        window.setTimeout(function () {
            window.pageLoaded = true;
            window.pageUnloading = false;
        }, 2000);
    };

    index.setPreferences = function () {
        if (window.mobile) {
            return;
        }
        var arrGadgets,
            saveGadgets = [];

        //this is to prevent saving userGadgets preference when loading page
        if (window.pageLoaded && !window.pageUnloading) {
            var state;
            arrGadgets = framework.gadgetManager.getGadgetsInSequence();
            $.each(arrGadgets, function (i, gadget) {
                if (gadget.window.indexOf(settings.globals.CONSOLE + '_0') > -1) {
                    state = {
                        "zone": gadget.zone,
                        "script": gadget.script,
                        "active": gadget.active,
                        "pinned": gadget.pinned,
                        "sequence": gadget.sequence,
                        "window": gadget.window
                    };

                    saveGadgets.push(state);
                }
            });

            framework.preferencesManager.set({
                'key': 'PREFERENCE-console-gadgets',
                'value': JSON.stringify(saveGadgets)
            });
        }
    };

    index.loadData = function () {
        index.renderUser();
        index.renderGadgets();
        notifications.get().done(function (data, newCount) {
            notifications.setActive(newCount);
        });
    };

    index.bindListeners = function () {
        var context = this;
        var $toolbar = $('.__toolbar');
        var $mainbar = $('.__mainbar');

        $(window).on(settings.globals.NAMESPACE + '-message', function (e) {
            var message = e.message,
                action = message && message.action,
                options = message && message.options;

            switch (action) {
                case 'MESSAGE-window-hashchanged':
                    if (window.name === framework.windowManager.getWindow().name) {
                        options.hash = framework.uriManager.parseHash();
                        index.handleHash(options);
                    }
                    break;
                case 'MESSAGE-hotkey-pressed':
                    if (options && options.key === 'alt+L') {
                        top.location = 'login.html';
                    }
                    if (options && options.key === 'alt+M') {
                        framework.pageManager.toggleMode();
                    }
                    break;
                case 'MESSAGE-focus-console':
                    options.hash = framework.uriManager.parseHash();
                    index.handleHash(options);
                    if (window.name === framework.windowManager.getWindow().name) {
                        window.confirm('Console is already open'); //NOSONAR
                    }
                    break;
                case 'MESSAGE-gadget-opened':
                    index.setToolbarIconActive(options);
                    index.setPreferences();
                    break;
                case 'MESSAGE-gadget-closed':
                    index.setToolbarIconInActive(options);
                    index.setPreferences();
                    break;
                case 'MESSAGE-gadget-pinned':
                case 'MESSAGE-gadget-activated':
                case 'MESSAGE-gadget-dropped':
                case 'MESSAGE-gadget-touched':
                    index.setPreferences();
                    break;
                default:
                    break;
            }
        });

        $mainbar.find('.notifications').off('click keyup');
        $mainbar.find('.notifications').on('click keyup', function (e) {
            if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                notifications.showList();
            }
        });

        $mainbar.find('.user').off('click keyup');
        $mainbar.find('.user').on('click keyup', function (e) {
            if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                context.showUserMenu();
            }
        });

        $toolbar.off('click keyup', '.knob');
        $toolbar.on('click keyup', '.knob', function (e) {
            var strType = $(this).attr('data-type'),
                strAction,
                strGadget;

            if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                if (strType === 'action') {
                    strAction = $(this).attr('data-action');
                    switch (strAction) {
                        case 'mobile':
                            framework.pageManager.setMode('mobile');
                            break;
                        case 'desktop':
                            framework.pageManager.setMode('desktop');
                            break;
                        case 'gadgets':
                            framework.gadgetManager.showViewerGadgets($(this));
                            break;
                        case 'console':
                            framework.windowManager.focusViewer(settings.globals.CONSOLE + '_0_' + window.USERID);
                            break;
                        case 'preferences':
                            userPreferences.show();
                            break;
                        case 'about':
                            about.show();
                            break;
                        case 'viewintro':
                            $('.tab:first').attr('data-intro', "This is a gadget tab")
                            $('.tab:first').attr('data-step', "6");
                            $('.tab:first').attr('data-position', "right");
                            $('.zone-splitter:first').attr('data-intro', "Use this to resize, flip panels")
                            $('.zone-splitter:first').attr('data-step', "7");
                            $('.zone-splitter:first').attr('data-position', "top");
                            introJs().start();
                            break;
                        default:
                            break;
                    }
                }

                if (strType === 'gadget') {
                    strGadget = $(this).attr('data-gadget');
                    framework.gadgetManager.showGadgetOpener(strGadget, {});
                }
            }
        });
    };

    index.handleHash = function (options) {
        var data = options && options.hash || framework.uriManager.parseHash();

        // update state extend of existing state
        // open
        // send message
        $.each(Object.keys(data), function (i, strScript) {
            if (framework.gadgetManager.isAdded(strScript, {})) {
                framework.gadgetManager.focusOrActivateTab({
                    script: strScript,
                    hash: data[strScript]
                });
                window.setTimeout(function () {
                    framework.messageManager.send({
                        action: 'MESSAGE-window-processhash',
                        options: {
                            script: strScript,
                            hash: data[strScript]
                        }
                    });
                }, 1000);
            } else {
                //open the gadget
                window.setTimeout(function () {
                    framework.gadgetManager.open({
                        zone: 'main',
                        script: strScript,
                        window: window.name,
                        data: {
                            hash: data[strScript]
                        }
                    });
                }, 1000 * i);
            }
        });
    };


    index.showUserMenu = function () {
        var strHtml;

        strHtml = HBS['pages/index/index']({
            language: window.language || 'en',
            items: framework.languageManager.translations(),
            viewerMode: (framework.layoutManager.pageMode === 'viewer'),
            switchUser: !window.CONFIG.sso,
            demo: window.CONFIG.demo,
            usermenu: true
        });
        $('body').append(strHtml);

        $('.usermenu').zazMenu({
            'selector': $('.__header .user'),
            useOffset: true,
            'item-click': function (e, data) {
                var strAction = data.action;
                switch (strAction) {
                    case 'switchuser':
                        top.location = 'login.html';
                        break;
                    case 'gadgets':
                        framework.gadgetManager.showViewerGadgets($(this));
                        break;
                    case 'preferences':
                        userPreferences.show();
                        break;
                    default:
                        break;
                }
            }
        });
    };

    index.setToolbarIconActive = function (options) {
        /*make the toolbar icon active;*/
        $('.__toolbar .knob[data-gadget=' + options.script + ']').addClass('active');
    };

    index.setToolbarIconInActive = function (options) {
        var gadgets,
            blnClose = true;
        /*make the toolbar icon inactive;*/
        if (options.cloneable) {
            //ensure count is zero
            gadgets = framework.gadgetManager.getGadgetsByScript(options.script);
            if (gadgets.length) {
                blnClose = false;
            }
        }
        if (blnClose) {
            $('.__toolbar .knob[data-gadget=' + options.script + ']').removeClass('active');
        }
    };

    index.renderUser = function () {
        userPreferences.displayUserName();
    };

    return index;
});