define([
    'jquery.plugins',
    'css!widgets/zazForm/zazForm',
    'css!widgets/zazForm/zazForm.themes'
], function ($) {

    /**
     * @namespace zazForm 
     * @classdesc A widget that creates a form.
     */
    return $.widget('zaz.zazForm', {

        patters: [{
                title: 'Alpha Numeric',
                name: 'alphanumeric',
                regex: '[a-zA-Z0-9]+'
            }, {
                title: 'Postal Code',
                name: 'postalcode',
                regex: '(\d{5}([\-]\d{4})?)'
            },
            {
                title: 'Phone Number',
                name: 'phonenumber',
                regex: '\d{3}[\-]\d{3}[\-]\d{4}'
            }, {
                title: 'Hex Color',
                name: 'hexcolor',
                regex: '^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'
            }, {
                title: 'IPv4 Address',
                name: 'ipv4address',
                regex: '((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$'
            },
            {
                title: 'Alpha Numeric 2-30 Chars',
                name: 'alphanumeric2-30chars',
                regex: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,30}$'
            }, {
                title: 'ISBN',
                name: 'isbn',
                regex: '(?:(?=.{17}$)97[89][ -](?:[0-9]+[ -]){2}[0-9]+[ -][0-9]|97[89][0-9]{10}|(?=.{13}$)(?:[0-9]+[ -]){2}[0-9]+[ -][0-9Xx]|[0-9]{9}[0-9Xx])'
            },
            , {
                title: 'Price',
                name: 'price',
                regex: '\d+(\.\d{2})?'
            }
        ],

        options: {
            config: null
        },

        _create: function () {
            this._super();

            this._renderLayout();
            this._bindListeners();
        },

        _renderLayout: function () {
            var strHtml;

            var strHtml = HBS['widgets/zazForm/zazForm']({
                form: this.options.config
            });
            this.element.append(strHtml);
            this.$form = this.element.find('.zaz-form');
            this.$footer = this.$form.find('.zaz-form-footer');

            if (window.CONFIG.debug) {
                this.$form.addClass('debug');
            }
        },

        _prevSection: function () {
            var $sections = this.$form.find('.zaz-form-section');
            var $section = this.$form.find('.zaz-form-section.active');
            var $prev = $section.prev();

            if ($prev.length) {
                $sections.removeClass('active');
                $prev.addClass('active');
            }
        },

        _nextSection: function () {
            var $sections = this.$form.find('.zaz-form-section');
            var $section = this.$form.find('.zaz-form-section.active');
            var $next = $section.next();

            if ($next.length) {
                $sections.removeClass('active');
                $next.addClass('active');
            }
        },

        _bindListeners: function () {
            var context = this;

            this.$footer.off('click', 'button');
            this.$footer.on('click', 'button', function () {
                var strAction = $(this).attr('data-action');
                if (strAction === 'prev') {
                    context._prevSection();
                }
                if (strAction === 'next') {
                    context._nextSection();
                }
            });

            this.$form.find('input, textarea, select').off('focus');
            this.$form.find('input, textarea, select').on('focus', function () {
                $(this).removeClass('zaz-untouched').addClass('zaz-touched');
            });

            this.$form.find('input, textarea, select').off('input blur');
            this.$form.find('input, textarea, select').on('input blur', function () {
                // $(this).removeClass('zaz-pristine').addClass('zaz-dirty');
                $(this).addClass('zaz-invalid');
            });
        }
    });
});