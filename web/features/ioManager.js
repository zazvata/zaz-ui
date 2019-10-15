define([
    'jquery.plugins',
    'framework/framework',
    'socket.io'
], function (
    $,
    framework,
    io
) {
    var ioManager = {};

    ioManager.init = function () {
        var context = this,
            socket, strUrl;

        if (framework.windowManager.getWindow().name !== window.name) {
            return false;
        }

        ioManager.getConfig().done(function () {
            strUrl = (context.data.heroku) ? 'http://zaz-rest.zazvata.com' : 'http://localhost:6001';
        }).fail(function () {
            strUrl = 'http://zaz-rest.zazvata.com';
        }).always(function () {
            if (!window.CONFIG.mock) {
                socket = io(strUrl, {
                    query: 'userId=' + window.USERID
                });
                socket.on('server-message', ioManager.handleSocketMessage);
            }
        });
    };

    ioManager.getConfig = function () {
        var context = this;

        function success(response) {
            response = (typeof response === 'string') ? JSON.parse(response) : response;
            context.data = response;
        }

        return framework.serviceManager.exec({
            service: 'ioManager.get.data',
            success: success
        });
    };

    ioManager.handleSocketMessage = function (options) {
        framework.messageManager.send({
            action: 'MESSAGE-server-message',
            options: options
        });
    };

    ioManager.init();
    return ioManager;
});