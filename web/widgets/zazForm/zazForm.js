define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'css!widgets/zazForm/zazForm',
    'css!widgets/zazForm/zazForm.themes'
], function ($,
    HBS,
    framework) {

    /**
     * @namespace zazForm 
     * @classdesc A widget that creates a form
     */
    return $.widget('zaz.zazForm', {
        data: null,
        dirty: false,
        valid: false,
        options: {
            rules: {}
        },

        patterns: {
            alphaNumeric: {
                title: 'Alpha Numeric',
                name: 'alphanumeric',
                regex: '[a-zA-Z0-9]+'
            },
            postalCode: {
                title: 'Postal Code',
                name: 'postalcode',
                regex: '(\d{5}([\-]\d{4})?)'
            },
            phoneNumber: {
                title: 'Phone Number',
                name: 'phonenumber',
                regex: '\d{3}[\-]\d{3}[\-]\d{4}'
            },
            hexColor: {
                title: 'Hex Color',
                name: 'hexcolor',
                regex: '^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$'
            },
            ipV4: {
                title: 'IPv4 Address',
                name: 'ipv4address',
                regex: '((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$'
            },
            alphaNumeric2to30: {
                title: 'Alpha Numeric 2-30 Chars',
                name: 'alphanumeric2-30chars',
                regex: '^[a-zA-Z][a-zA-Z0-9-_\.]{1,30}$'
            },
            isbn: {
                title: 'ISBN',
                name: 'isbn',
                regex: '(?:(?=.{17}$)97[89][ -](?:[0-9]+[ -]){2}[0-9]+[ -][0-9]|97[89][0-9]{10}|(?=.{13}$)(?:[0-9]+[ -]){2}[0-9]+[ -][0-9Xx]|[0-9]{9}[0-9Xx])'
            },
            price: {
                title: 'Price',
                name: 'price',
                regex: '\d+(\.\d{2})?'
            }
        },

        options: {
            config: null
        },

        _create: function () {
            this._super();

            this._renderLayout();
            this._setState();
            this._bindListeners();
        },

        _renderLayout: function () {
            var strHtml;

            var strHtml = HBS['widgets/zazForm/zazForm']({
                form: true,
                config: this.options.config
            });
            this.element.append(strHtml);
            this.$form = this.element.find('.zaz-form');
            this.$header = this.$form.find('.zaz-form-header');
            this.$footer = this.$form.find('.zaz-form-footer');
            this.$submit = this.$form.find('button[data-action="submit"]');
            this.$undo = this.$form.find('button[data-action="undo"]');
            this.$add = this.$form.find('button[data-action="add"]');
            this.$clear = this.$form.find('button[data-action="clear"]');
            this.$delete = this.$form.find('button[data-action="delete"]');
            this.$errorLink = this.$form.find('.zaz-form-error-link');
            this.$errors = this.$form.find('.zaz-form-errors');

            if (window.CONFIG.debug) {
                this.$form.addClass('debug');
            }
        },

        _setState: function () {
            this._applyRules();
            this._setValid();
            this._setErrors();
            this._setButtons();
        },

        _setValid: function () {
            this.valid = this.$form[0].checkValidity();
        },

        _setErrors: function () {
            var errors = this._getErrors();

            if (errors.length) {
                this.$errors.html(HBS['widgets/zazForm/zazForm']({
                    errors: true,
                    items: errors
                }));
                this.element.find('.zaz-form-error-link span').text(errors.length);
                this.element.find('.zaz-form-error-link').show();
            } else {
                this.element.find('.zaz-form-error-link').hide();
            }
        },

        _getErrors: function () {
            var errors = [];

            function getMessage(rule, pattern) {
                var message;
                switch (rule) {
                    case 'valueMissing':
                        message = 'Please enter a value!';
                        break;
                    case 'typeMismatch':
                        message = 'Value does not matches the pattern ' + pattern;
                        break;
                    case 'patternMismatch':
                        break;
                    case 'tooLong':
                        break;
                    case 'tooShort':
                        break;
                    case 'rangeUnderflow':
                        break;
                    case 'rangeOverflow':
                        break;
                    case 'stepMismatch':
                        break;
                    case 'badInput':
                        break;
                    case 'customError':
                        break;
                    case 'valid':
                        break;
                    default:
                        break;
                }
                return message;
            };

            function getError(field) {
                var response,
                    validity = field.validity,
                    pattern = field.pattern;

                if (field.willValidate) {
                    $.each(validity, function (rule) {
                        var message;
                        if (validity[rule]) {
                            message = getMessage(rule, pattern);
                            response = {
                                field: field.name,
                                rule: rule,
                                message: message
                            };
                            return false;
                        }
                        return true;
                    });
                }
                return response;
            };

            this.$form.find('[required]').each(function (i, field) {
                var error;
                if (!field.validity.valid) {
                    error = getError(field);
                    errors.push(error);
                }
            });
            return errors;
        },

        _setButtons: function () {
            this.$submit.attr('disabled', (this.valid) ? null : 'disabled');
            this.$submit.attr('aria-disabled', !this.valid);

            this.$undo.attr('disabled', (this.dirty) ? null : 'disabled');
            this.$undo.attr('aria-disabled', !this.dirty);
        },

        isDirty: function () {
            return this.dirty;
        },

        isValid: function () {
            return this.valid;
        },

        _setDirty: function (blnState) {
            this.dirty = blnState;
        },

        setData: function (data) {
            this.data = data;
            this._setData(data);
            this._setOriginal();
            this._applyRules();
            this._setState();
        },

        _clear: function () {
            this._setData(null);
        },

        _setOriginal: function () {
            this.element.find('[data-field]').each(function (i, field) {
                var $field = $(field),
                    strValue = $field.is('textarea, input, select') ? $field.val() : $field.text();

                if (!$field.hasAttr('data-displayonly')) {
                    $field.attr('data-original', strValue);
                }
            });
        },

        _undo: function () {
            this.element.find('[data-field]').each(function (i, field) {
                var $field = $(field),
                    strValue = $field.attr('data-original');

                if ($field.is('textarea, input, select')) {
                    $field.val(strValue);
                } else {
                    $field.text(strValue);
                }
            });
            this._setState(false);
        },

        _setData: function (data) {
            this.$form.find('[data-field]').each(function (i, field) {
                var $field = $(field),
                    strField = $field.attr('data-field'),
                    strValue = (data) ? strField.split('.').reduce((o, i) => o[i], data) : '';

                if ($field.is('textarea, input, select')) {
                    $field.val(strValue);
                } else {
                    $field.text(strValue);
                }
            });
        },

        getData: function () {
            var result = {};
            return result;
        },

        _applyRules: function () {
            $.each(this.options.rules, (strId) => {
                var rules = this.options.rules[strId],
                    $elem = this.element.find('[data-rule="' + strId + '"]').length ? this.element.find('[data-rule="' + strId + '"]') : this.element.find('[data-field="' + strId + '"]')

                $.each(rules, (i, objRule) => {
                    var blnAND = objRule.rule.indexOf(',') > -1,
                        blnOR = objRule.rule.indexOf('|') > -1,
                        separator = blnAND ? ',' : '|',
                        parts = objRule.rule.split(separator),
                        blnRuleResult = blnAND ? true : false,
                        blnOppoiste = objRule.opposite === false ? false : true;

                    $.each(parts, (i, statement) => {
                        if (blnAND) {
                            blnRuleResult = blnRuleResult && this._processStatement(statement);
                            return blnRuleResult;
                        }
                        if (blnOR) {
                            blnRuleResult = blnRuleResult || this._processStatement(statement);
                            return !blnRuleResult;
                        }
                        blnRuleResult = this._processStatement(statement);
                        return true;
                    });

                    if (blnRuleResult) {
                        if (objRule.attributes) {
                            $.each(objRule.attributes, (attribute) => {
                                $elem.attr(attribute, objRule.attributes[attribute]);
                            });
                        }
                        if (objRule.properties) {
                            $.each(objRule.properties, (property) => {
                                $elem.prop(property, objRule.properties[property]);
                            });
                        }
                    } else {
                        if (blnOppoiste) {
                            if (objRule.attributes) {
                                $.each(objRule.attributes, (attribute) => {
                                    var value = objRule.attributes[attribute] === null ? '' : null;
                                    $elem.attr(attribute, value);
                                });
                            }
                            if (objRule.properties) {
                                $.each(objRule.properties, (property) => {
                                    var value = objRule.properties[property] === null ? '' : null;
                                    $elem.prop(property, value);
                                });
                            }
                        }
                    }
                });
            });
        },

        _processStatement: function (strStatement) {
            var blnNOT = strStatement.indexOf('!=') > -1,
                statementSeparator = blnNOT ? '!=' : '=',
                strField = strStatement.split(statementSeparator)[0],
                statementValue = strStatement.split(statementSeparator)[1] === 'null' ? '' : strStatement.split(statementSeparator)[1],
                $field = this.element.find('[data-field="' + strField + '"]');

            return blnNOT ? $field.val() !== statementValue : $field.val() === statementValue;
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

            this.$form.find('input, textarea, select').off('input');
            this.$form.find('input, textarea, select').on('input', function () {
                context._setDirty(true);
                context._setState();
                context._trigger('changed', null);
            });

            this.$form.off('submit');
            this.$form.on('submit', function (e) {
                e.preventDefault();
                if (this.isValid) {
                    //pass form data 
                    context._trigger('submit', null, []);
                }
            });

            this.$errorLink.off('click keyup');
            this.$errorLink.on('click keyup', function (e) {
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    context.$errors.toggle();
                }
            });

            this.$errors.off('click keyup', '.zaz-form-error');
            this.$errors.on('click keyup', '.zaz-form-error', function (e) {
                var strField;
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    strField = $(this).attr('data-error-field');
                    context.$errors.hide();
                    context.$form.find('[name="' + strField + '"]').focus();
                }
            });

            this.$undo.off('click keyup');
            this.$undo.on('click keyup', function (e) {
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    context._undo();
                }
            });

            this.$clear.off('click keyup');
            this.$clear.on('click keyup', function (e) {
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    context._clear();
                }
            });

            $(document).mouseup(function (e) {
                context._hideErrors(e);
            });
        },

        _hideErrors: function (e) {
            var $element = this.$errors;
            if ($(e.target).hasClass('zaz-form-error-link')) {
                return;
            }
            if (!$element.is(e.target) && $element.has(e.target).length === 0) {
                $element.hide();
            }
        }
    });
});