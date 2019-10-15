define([
    'jquery.plugins',
    'settings/settings',
    'framework/gadgetManager',
    'framework/windowManager',
    'framework/messageManager',
    'framework/preferencesManager',
    'framework/languageManager',
    'handlebars-helpers',
    'ResizeSensor'
], function ($,
    settings,
    gadgetManager,
    windowManager,
    messageManager,
    preferencesManager,
    languageManager,
    HBS,
    ResizeSensor
) {


    /**
     * @namespace baseGadget
     * @classdesc This is the base gadget, all the gadgets in application may or may not be inherited from this base class
     */
    return $.widget('zaz.gadget', {

        _gadgetName: '',

        preferences: {},

        _create: function () {
            var context = this;

            this._lastPanelHeight = 0;
            this._lastPanelWidth = 0;
            this._panelElement = this.element.closest('.panel');
            this._createLoader();
            this._setGadgetName();
            this.bindListeners();
            this.getPreferences();
            new ResizeSensor(this.element, function() {
                context._resizeGadget();
            });
        },

        _setGadgetName: function () {
            this._gadgetName = this.widgetName;
            if (this.options.data && this.options.data.gadgetid) {
                this._gadgetName += '_' + this.options.data.gadgetid;
            }
        },

        _setOptions: function (options) {
            var $tab = gadgetManager.getTab(this.widgetName, {
                    gadgetid: this.option('gadgetid')
                }),
                tabOptions = $tab.data('options') || {};

            this._super(options);
            tabOptions = $.extend(true, {}, tabOptions, this.options);
            $tab.data('options', tabOptions);
        },

        _resizeGadget: function () {
            if (this._resize) {
                this._resize();
            }
        },

        _destroy: function () {
            this.element.empty();
            this.options = null;
            this._receiveMessage = null;
            this._resize = null;
            this._super();
            // this.widget().destroy();
        },

        _createLoader: function () {
            this.element.append(HBS['framework/baseGadget']({
                message: languageManager.translate('LOADING') + '...'
            }));
        },

        /**
         * @description Check if a Gadget Tab is pinned
         * @memberof baseGadget
         * @returns {boolean} 
         */
        isPinned: function () {
            var $tab = gadgetManager.getTab(this.widgetName, {
                    gadgetid: this.element.attr('data-gadgetid')
                }),
                options = $tab.data('options');

            return options.pinned;
        },

        bindListeners: function () {
            var context = this;

            $(window).on(settings.globals.NAMESPACE + '-message', function (e) {
                if (context._receiveMessage) {
                    context._receiveMessage(e);
                }
            });

            // $(window).on('resized', function () {
            //     context._resizeGadget();
            // });
        },

        /**
         * @description Check if a Gadget Tab is pinned
         * @memberof baseGadget
         * @param action {String} message
         * @param options {object} additional payload to send with action
         */
        sendMessage: function (action, options) {
            messageManager.send({
                action: action,
                options: options || {}
            });
        },

        /**
         * @description Blocks the gadget while loading Gadget
         * @memberof baseGadget
         */
        showLoader: function () {
            this.element.find('.gadget-message').css('display', 'flex');
            this.element.find('.gadget-loading').show();
        },

        /**
         * @description Unblocks the gadget after loading Gadget
         * @memberof baseGadget
         */
        hideLoader: function () {
            this.element.find('.gadget-message').css('display', 'none');
            this.element.find('.gadget-loading').hide();
        },

        /**
         * @description Retrieves preferences for the Gadget
         * @memberof baseGadget
         * @returns preferences {object}
         */
        getPreferences: function () {
            var strKey = 'PREFERENCE-' + this._gadgetName + '-settings';
            this.preferences = windowManager.getWindow().preferences && windowManager.getWindow().preferences[strKey] || {};
            return this.preferences;
        },

        /**
         * @description Saves preferences for the Gadget
         * @memberof baseGadget
         */
        setPreferences: function () {
            var context = this;
            var strKey = 'PREFERENCE-' + this._gadgetName + '-settings';

            preferencesManager.set({
                'key': strKey,
                'value': JSON.stringify(this.preferences)
            }).done(function () {
                windowManager.getWindow().preferences[strKey] = context.preferences;
            });
        }
    });
});