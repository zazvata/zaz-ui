define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'settings/settings',
    'widgets/zazMenu/zazMenu',
    'css!features/notifications/notifications'
], function (
    $,
    HBS,
    framework,
    settings,
    zazMenu
) {
    var audio = new Audio('./features/notifications/file-tiny-bell-sms.mp3');
    var notifications = {};

    notifications.init = function () {
        if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
            return true;
        }
        notifications.bindListeners();
    };

    notifications.bindListeners = function () {
        var context = this;

        window.speechSynthesis.onvoiceschanged = function () {
            context.voices = window.speechSynthesis.getVoices();
        };

        $(window).on(settings.globals.NAMESPACE + '-message', function (e) {
            var message = e.message,
                options = message && message.options,
                action = message && message.action,
                data = options && options.data,
                text;

            switch (action) {
                case 'MESSAGE-server-message':
                    switch (options.action) {
                        case 'created':
                            text = notifications.handleCreated(data);
                            break;
                        case 'reviewed':
                            text = notifications.handleReviewed(data);
                            break;
                        case 'approved':
                            text = notifications.handleApproved(data);
                            break;
                        case 'deleted':
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }

            notifications.processMessage(text);
        });
    };

    notifications.show = function () {
        var $notification = $('.notification');

        $('body').css('overflow', 'hidden');
        $notification.css('height', '');
        $notification.show();
        $notification.height($notification.height());
        $notification.addClass('active');
        setTimeout(function () {
            $notification.removeClass('active');
        }, 5000);
    };

    notifications.processMessage = function (text) {
        if (!text) {
            return false;
        }
        notifications.reset(text);
        notifications.show();
        notifications.get().done(function (data, newCount) {
            notifications.setActive(newCount);
        });
        if (framework.windowManager.getWindow().name === window.name) {
            notifications.announce();
        }
    };

    notifications.announce = function () {
        var $notification = $('.notification'),
            msg = new window.SpeechSynthesisUtterance($notification.find('.content').text());

        //msg.voice = this.voices[1];
        //msg.pitch = 1.3;
        window.speechSynthesis.speak(msg);
    };

    notifications.reset = function (text) {
        $('.notification').remove();
        $(document.body).append(HBS['features/notifications/notifications']({
            blnPopup: true,
            text: text,
            items: framework.languageManager.translations()
        }));
        $('.notification').draggable({
            scroll: false
        });
    };

    notifications.handleCreated = function (data) {
        var text;

        if (window.USERID === data.reviewed.userId.toString()) {
            text = 'You have been assigned as a reviewer for a new application #' + data.id + '.';
        }

        if (window.USERID === data.approved.userId.toString()) {
            text = 'You have been assigned as an approver for a new application #' + data.id + '.';
        }

        return text;
    };

    notifications.handleReviewed = function (data) {
        var text;

        function getName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        if (window.USERID === data.created.userId.toString()) {
            text = 'Your application #' + data.id + ' has been submitted by ' + getName(data.reviewed.user || data.reviewed) + ' for approval.';
        }

        if (window.USERID === data.approved.userId.toString()) {
            text = 'The application #' + data.id + ' is ready for your approval.';
        }

        return text;
    };

    notifications.handleApproved = function (data) {
        var text;

        function getName(user) {
            return user.firstName + ' ' + user.lastName;
        }

        if (window.USERID === data.created.userId.toString()) {
            text = 'Your application #' + data.id + ' has been approved by ' + getName(data.approved.user || data.approved) + '.';
        }

        if (window.USERID === data.reviewed.userId.toString()) {
            text = 'Your reviewed application #' + data.id + ' has been approved by ' + getName(data.approved.user || data.approved) + '.';
        }

        return text;
    };

    notifications.get = function (blnMarkAsViewed) {
        var deferred = $.Deferred();

        framework.serviceManager.exec({
            service: 'notifications.get.data',
            success: function (data) {
                var newCount = 0;
                $.each(data, function (i, notification) {
                    if (!notification.viewed || notification.viewed.indexOf(window.USERID) === -1) {
                        newCount = newCount + 1;
                    }
                });
                deferred.resolve(data, newCount);
            },
            error: deferred.reject,
            params: {
                userId: window.USERID,
                viewed: blnMarkAsViewed || false
            }
        });

        return deferred.promise();
    };

    notifications.setActive = function (newCount) {
        if (!newCount) {
            return false;
        }
        $('.__mainbar .notifications .count').html(newCount);
        $('.__mainbar .notifications').addClass('active');
        audio.play();
    };

    notifications.showList = function () {
        notifications.get(true).done(function (data, newCount) {
            notifications.renderList(data);
            $('.notificationsmenu').zazMenu({
                'selector': $('.__mainbar .notifications')
            });
            $('.__mainbar .notifications').removeClass('active');
        });
    };

    notifications.renderList = function (data) {
        var textItems = [], strHtml;
        $.each(data, function (i, notification) {
            notification.id = notification.appNumber;
            switch (notification.action) {
                case 'created':
                    text = notifications.handleCreated(notification);   
                    break;
                case 'reviewed':
                    text = notifications.handleReviewed(notification);
                    break;
                case 'approved':
                    text = notifications.handleApproved(notification);
                    break;
                case 'deleted':
                    break;
                default:
                    break;
            }
            textItems.push(text);
        });
        strHtml = HBS['features/notifications/notifications']({
            blnList: true,
            textItems: textItems
        });
        $('body').append(strHtml);
    };

    notifications.init();
    return notifications;
});