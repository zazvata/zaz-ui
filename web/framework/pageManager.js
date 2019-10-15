define([
    'jquery.plugins',
    'settings/settings',
    'framework/messageManager',
    'framework/storageManager',
    'framework/windowManager',
    'framework/gadgetManager',
    'framework/uriManager',
    'ElementQueries'
], function (
    $,
    settings,
    messageManager,
    storageManager,
    windowManager,
    gadgetManager,
    uriManager,
    ElementQueries
) {

    /**
     * @namespace pageManager
     * @classdesc Initializes starting html pages.
     */
    var pageManager = {

        /**
         * @description Initializes page 
         * @memberof pageManager
         * @param strPage {String} name of the page without html extension
         */
        init: function (strPage) {
            var context = this,
                $body = $('body'),
                isExtended = (uriManager.get('extended') === '1');

            //clean up all gadgets belonging to the main console
            if (this.isExtended) {
                gadgetManager.removeGadgetsByViewer();
            }

            this.bindListeners();

            require([strPage], function (page) {
                page.init().done(function () {
                    context.loaded();
                    if (window.CONFIG.debug) {
                        $body.addClass('debug');
                    }
                    window.setTimeout(function () {
                        ElementQueries.init();
                    }, 250);

                });
            });
        },

        loaded: function () {
            var deferreds = windowManager.getWindow().deferreds;
            //resolve window has loaded assets successfully
            if (deferreds[window.name]) {
                deferreds[window.name].resolve(window.name);
            }
        },

        setMode: function (strMode) {
            var currentMode = storageManager.getStorageItem(settings.globals.NAMESPACE + '-mode');
            if (strMode !== currentMode) {
                storageManager.setStorageItem(settings.globals.NAMESPACE + '-mode', strMode);
                location.reload();
            }
        },

        toggleMode: function () {
            var strMmode,
                currentMode = storageManager.getStorageItem(settings.globals.NAMESPACE + '-mode');

            strMode = (currentMode === 'mobile') ? 'desktop' : 'mobile';
            storageManager.setStorageItem(settings.globals.NAMESPACE + '-mode', strMode);
            location.reload();
        },

        bindListeners: function () {
            var context = this,
                $body = $('body');

            $(window).on(settings.globals.NAMESPACE + '-message', function (e) {
                var message = e.message,
                    action = message && message.action,
                    options = message && message.options;

                switch (action) {
                    case 'MESSAGE-hotkey-pressed':
                        if (options && options.key === 'alt+H') {
                            windowManager.focusViewer(settings.globals.CONSOLE + '_0_' + window.USERID);
                        }
                        break;
                    default:
                        break;
                }
            });

            $body.off('dblclick', '.__toolbar');
            $body.on('dblclick', '.__toolbar', function () {
                windowManager.requestFullScreen(document.documentElement);
            });

            // bind hotkeys
            $body.off('keyup.hotkey');
            $body.on('keyup.hotkey', function (e) {
                var altStr = e.altKey ? 'alt' : null,
                    ctrlStr = e.ctrlKey ? 'ctrl' : null,
                    shiftStr = e.shiftKey ? 'shift' : null,
                    keyStr = String.fromCharCode(e.keyCode),
                    result = [altStr, ctrlStr, shiftStr, keyStr].filter(function (item) {
                        return item;
                    }).join('+');

                e.preventDefault();

                switch (result) {
                    case 'alt+A': //about
                    case 'alt+G': //show viewer gadgets
                    case 'alt+H': //console
                    case 'alt+L': //logout
                    case 'alt+M': //mobile/desktop
                    case 'alt+P': //preferences
                    case 'alt+T': //theme
                        messageManager.send({
                            action: 'MESSAGE-hotkey-pressed',
                            options: {
                                key: result
                            }
                        });
                        break;
                    default:
                        break;
                }
            });
        },

        getExtendedWindowGadgets: function () {
            var gadgets = [];
            //when extended window is refreshed, 
            //do not remove the gadgets for the extended window immediately
            //instead give it a wait time of 3-5 seconds on console to see 
            //if window is not coming back and then remove the gadgets
            //if it does return send the set back
            return gadgets;
        },

        getGadgets: function () {
            var gadgets = [],
                viewerId,
                isConsole = (window.name.indexOf(settings.globals.CONSOLE) > -1),
                isExtended = (uriManager.get('extended') === '1');

            if (isExtended) {
                gadgets = this.getExtendedWindowGadgets();
                return gadgets;
            }

            if (isConsole) {
                gadgets = window.preferences['PREFERENCE-console-gadgets'] || [];
                if (gadgets.length === 0) {
                    switch (window.user.role) {
                        case 'admin':
                            gadgets = [{
                                zone: 'main',
                                script: 'applications',
                                active: false,
                                window: window.name
                            }];
                            break;
                        case 'user':
                        default:
                            gadgets = [{
                                    zone: 'main-left',
                                    script: 'applications',
                                    active: true,
                                    window: window.name
                                },
                                {
                                    zone: 'main-right',
                                    script: 'applicationsChart',
                                    active: true,
                                    window: window.name
                                }
                            ];
                            break;
                    }
                }
            } else {
                viewerId = uriManager.get('viewerId');
                gadgets = [{
                        zone: 'main-left',
                        script: 'incomes',
                        active: true,
                        window: window.name,
                        data: {
                            gadgetid: viewerId
                        }
                    },
                    {
                        zone: 'main-right',
                        script: 'incomesChart',
                        active: true,
                        window: window.name,
                        data: {
                            gadgetid: viewerId
                        }
                    }
                ];

            }
            return gadgets;
        }
    };

    if (window.CONFIG.debug) {
        window.pageManager = pageManager;
    }

    return pageManager;
});