define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'widgets/zazMenu/zazMenu',
    'common/formatter',
    'features/notifications/notifications',
    'settings/settings',
    'css!pages/viewer/viewer'
], function ($,
    HBS,
    framework,
    zazMenu,
    formatter,
    notifications,
    settings
) {


    var viewer = {};

    viewer.urls = {
        'applications': 'viewer.json'
    };

    //init method must return a promise
    viewer.init = function () {
        var deferred = $.Deferred();

        //set doc set id from url
        window.viewerId = framework.uriManager.get('viewerId');
        $('title').html($('title').html() + ' - ' + window.viewerId);

        viewer.loadData().done(function () {
            viewer.renderLayout();
            viewer.bindListeners();

            deferred.resolve();
        });
        return deferred.promise();
    };

    viewer.renderLayout = function () {
        var strHtml;

        $('body').attr('data-lang', window.language || 'en');

        strHtml = HBS['pages/viewer/viewer']({
            viewerMode: (framework.layoutManager.pageMode === 'viewer'),
            items: framework.languageManager.translations(),
            mainbar: true,
            applicationNumber: window.viewerId,
            isReviewed: window.isReviewed,
            isApproved: window.isApproved,
            creator: [creator.firstName, creator.lastName].join(' ')
        });
        $('body').find('.__header').append(strHtml);

        strHtml = HBS['pages/viewer/viewer']({
            viewerMode: (framework.layoutManager.pageMode === 'viewer'),
            items: framework.languageManager.translations(),
            toolbar: true
        });
        $('body').find('.__toolbar').append(strHtml);
    };

    viewer.renderGadgets = function () {
        var gadgets = framework.pageManager.getGadgets();

        framework.gadgetManager.open(gadgets);
    };

    viewer.loadData = function () {
        var deferred = $.Deferred();

        viewer.renderGadgets();
        framework.serviceManager.exec({
            service: 'applications.get.app',
            params: {
                id: window.viewerId,
            },
            success: function (response) {
                var response = response[0];
                window.isReviewed = !!response.review_date;
                window.isApproved = !!response.approve_date;
                window.creator = response.creator.firstName;
                deferred.resolve();
            },
            error: function (response) {
                deferred.resolve();
            }
        });
        return deferred.promise();
    };

    viewer.bindListeners = function () {
        var $toolbar = $('.__toolbar');

        $(window).on(settings.globals.NAMESPACE + '-message', function (e) {
            var message = e.message,
                options = message.options;

            switch (message.action) {
                case 'MESSAGE-server-message':
                    switch (options.action) {
                        case 'reviewed':
                            if (options.data.id === window.viewerId) {
                                $('body').find('.__header .reviewed .status').html('YES');
                                $('body').find('.__header .reviewed .status').toggleClass('yes', true);
                            }
                            break;
                        case 'approved':
                            if (options.data.id === window.viewerId) {
                                $('body').find('.__header .approved .status').html('YES');
                                $('body').find('.__header .approved .status').toggleClass('yes', true);
                            }
                            break;
                        case 'deleted':
                            framework.serviceManager.exec({
                                service: 'applications.get.app',
                                params: {
                                    appnum: window.viewerId,
                                },
                                success: function (response) {
                                    if (response.error) {
                                        window.close();
                                    }
                                }
                            });
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
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
                        case 'gadgets':
                            framework.gadgetManager.showViewerGadgets($(this));
                            break;
                        case 'console':
                            framework.windowManager.focusViewer(settings.globals.CONSOLE + '_0_' + window.USERID);
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

    viewer.renderUser = function () {
        $('.__header .userinfo').text(formatter.nameFormat.userInfo(window.user));
    };

    viewer.renderDocumentSetTitle = function () {
        $('.__header .csname .cstitle').html(window.documentSetTitle).attr('title', window.documentSetTitle);
    };

    viewer.close = function () {};

    viewer.sendMessage = function (action, options) {
        framework.messageManager.send({
            action: action,
            options: options || {}
        });
    };

    return viewer;
});