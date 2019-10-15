define([
    'jquery.plugins',
    'framework/keys',
    'handlebars-helpers',
    'css!widgets/zazPane/zazPane'
], function ($,
    keys,
    HBS) {

    /**
     * @namespace zazPane  
     * @classdesc A widget that creates accordion style control with both vertical/horizontal orientation.
     */
    return $.widget('zaz.zazPane', {
        options: {
            orientation: 'v',
            viewMode: 'all' //or single
        },

        _create: function () {
            this._super();

            this._setDefaults();
            this._bindListeners();
            this._renderLayout();
        },

        _setStyles: function () {
            this.element.addClass('zaz-pane');
        },

        _setOrientation: function (strOrientation) {
            this.element.attr('data-orientation', strOrientation || this.options.orientation);
        },

        toggleOrientation: function () {
            this.options.orientation = (this.options.orientation === 'v') ? 'h' : 'v';
            this._setOrientation();
        },

        _setDefaults: function () {
            this._setStyles();
            this._setOrientation();
        },

        _renderLayout: function () {
            var strHtml = HBS['widgets/zazPane/zazPane']({
                data: this.options.data
            });

            this.element.html(strHtml);
            this._expandFirstPanel();
        },

        _expandPanel: function (idPanel) {
            this.element.find('.zaz-pane-panel').removeClass('active');
            this.element.find('.zaz-pane-panel').attr('aria-expanded', false);
            this.element.find('.zaz-pane-panel[data-id="' + idPanel + '"]').show();
            this.element.find('.zaz-pane-panel[data-id="' + idPanel + '"]').addClass('active');
            this.element.find('.zaz-pane-panel[data-id="' + idPanel + '"]').attr('aria-expanded', true);
            if (this.options.viewMode === 'single') {
                this.element.find('.zaz-pane-panel:not([data-id="' + idPanel + '"])').hide();
            }
        },

        _expandFirstPanel: function () {
            this.element.find('.zaz-pane-panel:first-child .zaz-pane-panel-tab').click();
        },

        _bindListeners: function () {
            var context = this;
            this.element.on('click keyup', '.zaz-pane-panel-tab', function (e) {
                var idPanel = $(this).closest('.zaz-pane-panel').attr('data-id');
                if (e.type === 'click' || e.keyCode === keys.ENTER || e.keyCode === keys.SPACE) {
                    context._expandPanel(idPanel);
                }
            });
        }
    });

});