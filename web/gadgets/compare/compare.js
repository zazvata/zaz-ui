define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'dmp',
    'css!gadgets/compare/compare'
], function ($,
    HBS,
    framework,
    diff_match_patch) {

    return $.widget('zaz.compare', framework.baseGadget, {
        options: {
            data: []
        },
        mode: 'raw',

        _receiveMessage: function (e) {
            var message = e.message,
                action = message && message.action;

            switch (action) {
                case 'MESSAGE-gadget-pinned':
                    break;
                default:
                    break;
            }
        },

        _create: function () {
            var context = this;

            this._super();
            this.showLoader();
            this._renderLayout();
            this._loadData();
            this._bindListeners();

            window.setTimeout(function () {
                context.hideLoader();
            }, 2000);
        },

        _bindListeners: function () {
            var context = this;

            $(this.element).find('.knobs .knob').on('click keyup', function (e) {
                var strMode = $(this).attr('data-mode');
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {

                    if ($(this).hasClass('active')) {
                        return true;
                    }
                    context.mode = strMode;
                    context._setMode();
                    context._compareText();
                }
            });
        },

        _renderLayout: function () {
            var strHtml = HBS['gadgets/compare/compare']({
                items: framework.languageManager.translations()
            });

            this.element.append(strHtml);

            this.$panel = this.element.closest('.panel');
            this.$tabcontrols = this.$panel.find('.tabcontrols');
            this.$container = this.element.find('.container');

            this.$text1 = this.$container.find('.text1 .content-text');
            this.$text2 = this.$container.find('.text2 .content-text');
            this.$result = this.$container.find('.result .content-text');
            this._applyPreferences();
        },

        _loadData: function () {
            this.showLoader();
            this._fetchData();
        },

        _fetchData: function () {
            var context = this;

            function success(response) {
                response = (typeof response === 'string') ? JSON.parse(response) : response;
                context.data = (response && response.data) ? response.data : [];

                context._renderDataResponse();
            }

            function error() {

            }

            framework.serviceManager.exec({
                service: 'compare.get.data',
                success: success,
                error: error
            }).always(function () {
                context.hideLoader();
            });
        },

        _renderDataResponse: function () {
            this.$text1.html(this.data.text1);
            this.$text2.html(this.data.text2);
            this._compareText();
        },

        _setMode: function () {
            this.element.find('.knobs .knob').removeClass('active');
            this.element.find('.knobs .knob[data-mode="' + this.mode + '"]').addClass('active');

            this.preferences.mode = this.mode;
            this.setPreferences();
        },

        _applyPreferences: function () {
            var strMode = this.preferences.mode || this.mode;

            this.mode = strMode;
            this.element.find('.knobs .knob').removeClass('active');
            this.element.find('.knobs .knob[data-mode="' + this.mode + '"]').addClass('active');
        },

        _compareText: function () {
            var text1 = this.$text1.html(),
                text2 = this.$text2.html(),
                dmp,
                d,
                ds;

            dmp = new diff_match_patch();
            dmp.Diff_Timeout = parseFloat(1); //1 second
            dmp.Diff_EditCost = parseFloat(4); //4 edit costs
            d = dmp.diff_main(text1, text2);

            switch (this.mode) {
                case 'semantic':
                    dmp.diff_cleanupSemantic(d);
                    break;
                case 'efficiency':
                    dmp.diff_cleanupEfficiency(d);
                    break;
                default:
                    break;
            }

            ds = dmp.diff_prettyHtml(d);
            this.$result.html(ds);
        }
    });
});