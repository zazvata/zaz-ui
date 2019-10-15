define([
    'jquery.plugins',
    'settings/settings',
    'framework/storageManager'
], function (
    $,
    settings,
    storageManager
) {
    function isValid(action) {
        if (!settings.messages[action]) {
            console.warn('Message action: "' + action + '" is not documented in framework/messages.js and is disallowed.');
            return false;
        }

        return true;
    }

    /**
     * @namespace messageManager
     * @classdesc Manages Messaging using Storage API.
     */
    var messageManager = {
        /**
         * @description Send a message within the same Window as Trigger and Across Windows as Local Storage Event
         * @memberof messageManager
         * @param objMessage {Object} Message object
         */
        send: function (objMessage) {
            if (!isValid(objMessage.action)) {
                return;
            }

            //always have at least an empty message to prevent storage.js from breaking
            if (!objMessage) {
                objMessage = {};
            }
            if (!window.isIE) {
                $.event.trigger({
                    'type': settings.globals.NAMESPACE + '-message',
                    'message': objMessage,
                    'time': new Date().getTime()
                });
            }

            objMessage.time = new Date().getTime();
            storageManager.setStorageItem(settings.globals.NAMESPACE + '-message', objMessage);
        }
    }

    if (window.CONFIG.debug) {
        window.messageManager = messageManager;
    }

    return messageManager;
});