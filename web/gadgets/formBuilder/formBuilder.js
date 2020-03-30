define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'widgets/zazForm/zazForm',
    'jsonTree',
    'css!gadgets/formBuilder/formBuilder'
], function ($,
    HBS,
    framework,
    zazForm) {

    /**
     * @namespace formBuilder
     * @classdesc A gadget that enabled user to create a form.
     */
    return $.widget('zaz.formBuilder', {
        options: {
            config: null
        },

        form: {
            format: {
                theme: 'style1',
                stepmode: 'disabled', // or enabled
                labels: 'inline', //or top, none, placeholder
                controls: 'fixed', //or stretched
                formtitle: 'enabled', // or disabled
                grouptitles: 'enabled' // or disabled
            },
            header: {
                title: 'User Information'
            },
            footer: {
                enabled: false
            },
            sections: [{
                    enabled: true,
                    groups: [{
                        name: 'name',
                        title: 'User Details',
                        enabled: true,
                        fields: [{
                                enabled: true,
                                label: 'First Name',
                                name: 'firstname',
                                type: 'text',
                                required: true,
                                width: 200,
                                rules: ['regex']
                            },
                            {
                                enabled: true,
                                label: 'Last Name',
                                name: 'lastname',
                                type: 'text',
                                required: true,
                                width: 200,
                                rules: ['regex']
                            }
                        ]
                    }, {
                        name: 'meta',
                        title: 'Meta Details',
                        enabled: true,
                        fields: [{
                            enabled: true,
                            label: 'Work',
                            name: 'work',
                            type: 'checkbox',
                            display: 'row',
                            required: true,
                            rules: ['regex'],
                            items: [{
                                title: 'Home',
                                value: 'home'
                            }, {
                                title: 'Office',
                                value: 'office'
                            }, {
                                title: 'Hoteling',
                                value: 'hoteling'
                            }]
                        }, {
                            enabled: true,
                            label: 'Travel',
                            name: 'travel',
                            type: 'range',
                            min: '10',
                            max: '50',
                            required: true,
                            width: 200,
                            rules: ['regex']
                        }]

                    }]
                },
                {
                    enabled: true,
                    groups: [{
                        name: 'address',
                        title: 'User Location',
                        enabled: true,
                        fields: [{
                            enabled: true,
                            label: 'State',
                            name: 'state',
                            type: 'select',
                            width: 150,
                            required: true,
                            rules: ['regex'],
                            items: [{
                                title: 'California',
                                value: 'CA'
                            }, {
                                title: 'Virginia',
                                value: 'VA'
                            }, {
                                title: 'Delaware',
                                value: 'DE'
                            }]
                        }, {
                            enabled: true,
                            label: 'Zip',
                            name: 'zip',
                            type: 'text',
                            required: true,
                            width: 100,
                            rules: ['regex']
                        }]
                    }]
                },
                {
                    enabled: true,
                    groups: [{
                        name: 'role',
                        title: 'Role Details',
                        enabled: true,
                        fields: [{
                            enabled: true,
                            label: 'Role',
                            name: 'role',
                            type: 'select',
                            required: true,
                            width: 150,
                            multiple: true,
                            rules: ['regex'],
                            items: [{
                                title: 'Admin',
                                value: 'ADM'
                            }, {
                                title: 'Forms Admin',
                                value: 'FRM_ADM'
                            }, {
                                title: 'Forms Manager',
                                value: 'FRM_MGR'
                            }]
                        }]
                    }]
                }
            ]
        },

        _create: function () {
            this._super();

            this._renderLayout();
            this._bindListeners();
        },

        _renderLayout: function () {
            var strHtml = HBS['gadgets/formBuilder/formBuilder']({
                items: framework.languageManager.translations()
            });

            this.element.append(strHtml);
            this.$content = this.element.find('.gadget-content');
            this.$knobs = this.element.find('.gadget-controls .knobs');
            this.$builder = this.element.find('.zaz-form-builder');
            this.$designer = this.element.find('.zaz-form-designer');
            this.$features = this.element.find('.zaz-form-features');

            this.$json = this.element.find('.zaz-form-data .json');
            this.$designer.zazForm({
                'config': this.form
            });

            this.$form = this.$designer.find('.zaz-form');
            this.$footer = this.$form.find('.zaz-form-footer');

            this._setSortable();
        },

        _setSortable: function () {
            var context = this;

            this.$form.find('.zaz-form-group').each(function (i, item) {
                if ($(item).sortable('instance')) {
                    $(item).sortable('destroy');
                }
            });

            this.$form.find('.zaz-form-section').each(function (i, item) {
                if ($(item).sortable('instance')) {
                    $(item).sortable('destroy');
                }
            });

            this.$form.find('.zaz-form-items').each(function (i, item) {
                if ($(item).sortable('instance')) {
                    $(item).sortable('destroy');
                }
            });

            this.$form.find('.zaz-form-items').sortable({
                axis: 'y',
                items: '.zaz-form-section',
                // placeholder: 'placeholder',
                tolerance: 'pointer',
                cursor: 'move',
                opacity: 0.5,
                start: function (event, ui) {
                    // ui.item.toggleClass('highlight');
                },
                stop: function (event, ui) {
                    // ui.item.toggleClass('highlight');
                },
                // accept: '.zaz-form-section',
                receive: function (event, ui) {
                    var html = `
                        <div class="zaz-form-section" data-enabled="true">
                        <div class="zaz-form-group" data-group="group" data-enabled="true">
                        <div class="zaz-form-group-title">Group Title</div>
                        <span>Add a field!</span>
                        </div>
                        </div>`;
                    if (ui.helper && ui.helper.hasClass('zaz-form-feature')) {
                        ui.helper.replaceWith(html);
                        context._setSortable();
                    }
                }
            });

            this.$form.find('.zaz-form-section').sortable({
                connectWith: '.zaz-form-section',
                axis: 'y',
                items: '.zaz-form-group',
                // placeholder: 'placeholder',
                tolerance: 'pointer',
                cursor: 'move',
                opacity: 0.5,
                start: function (event, ui) {
                    // ui.item.toggleClass('highlight');
                },
                stop: function (event, ui) {
                    // ui.item.toggleClass('highlight');
                },
                // accept: '.zaz-form-group',
                receive: function (event, ui) {
                    var html = `
                        <div class="zaz-form-group" data-group="group" data-enabled="true">
                        <div class="zaz-form-group-title">Group Title</div>
                        <span>Add a field!</span>
                        </div>`;
                    if (ui.helper && ui.helper.hasClass('zaz-form-feature')) {
                        ui.helper.parent().find('> span').remove();
                        ui.helper.replaceWith(html);
                        context._setSortable();
                    }
                }
            });

            this.$form.find('.zaz-form-group').sortable({
                connectWith: '.zaz-form-group',
                axis: 'y',
                items: '.zaz-form-field',
                // placeholder: 'placeholder',
                tolerance: 'pointer',
                cursor: 'move',
                opacity: 0.5,
                start: function (event, ui) {
                    // ui.item.toggleClass('highlight');
                },
                stop: function (event, ui) {
                    // ui.item.toggleClass('highlight');
                },
                // accept: '.zaz-form-field',
                receive: function (event, ui) {
                    var fieldHtml;
                    var fieldType;

                    if (ui.helper && ui.helper.hasClass('zaz-form-feature')) {
                        fieldType = ui.helper.attr('data-type');
                        ui.helper.parent().find('span').remove();
                        fieldHtml = context._getFieldHtml(fieldType);
                        ui.helper.replaceWith(fieldHtml);
                        context._setSortable();
                    }
                }
            });
        },

        _getFieldHtml: function (fieldType) {
            var html;
            switch (fieldType) {
                case 'text':
                    html = `
                    <div class="zaz-form-field" data-enabled="true">
                        <div class="zaz-form-label">Text</div>
                        <div class="zaz-form-control">
                            <input name="input" type="text" width="12" class="zaz-required">
                        </div>
                    </div>`;
                    break;
                case 'email':
                    html = `
                    <div class="zaz-form-field" data-enabled="true">
                        <div class="zaz-form-label">Email</div>
                        <div class="zaz-form-control">
                            <input name="email" type="email" width="12" class="zaz-required">
                        </div>
                    </div>`;
                    break;
                case 'number':
                    html = `
                    <div class="zaz-form-field" data-enabled="true">
                        <div class="zaz-form-label">Number</div>
                        <div class="zaz-form-control">
                            <input name="number" type="number" class="zaz-required">
                        </div>
                    </div>`;
                    break;
                case 'range':
                    html = `
                    <div class="zaz-form-field" data-enabled="true">
                        <div class="zaz-form-label">Range</div>
                        <div class="zaz-form-control">
                            <input name="range" type="range" min="1" max="10" class="zaz-required">
                        </div>
                    </div>`;
                    break;
                case 'checkbox':
                    html = `
                    <div class="zaz-form-field" data-enabled="true">
                        <div class="zaz-form-label">Checkbox</div>
                        <div class="zaz-form-control">
                            <div class="zaz-form-checkbox-controls" data-display="row">
                                <div class="zaz-form-checkbox-control">
                                    <label>
                                        <input name="checkbox" type="checkbox" value="item1">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="control-title">Item 1</span>
                                </div>
                                <div class="zaz-form-checkbox-control">
                                    <label>
                                        <input name="checkbox" type="checkbox" value="item2">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="control-title">Item 2</span>
                                </div>
                                <div class="zaz-form-checkbox-control">
                                    <label>
                                        <input name="checkbox" type="checkbox" value="item3">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="control-title">Item 3</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    break;
                case 'radio':
                    html = `
                    <div class="zaz-form-field" data-enabled="true">
                        <div class="zaz-form-label">Radio</div>
                        <div class="zaz-form-control">
                            <div class="zaz-form-radio-controls" data-display="column">
                                <div class="zaz-form-radio-control">
                                    <label>
                                        <input name="radio" type="radio" value="item1">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="control-title">Item 1</span>
                                </div>
                                <div class="zaz-form-radio-control">
                                    <label>
                                        <input name="radio" type="radio" value="item2">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span class="control-title">Item 2</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                    break;
                case 'select':
                    html = `
                    <div class="zaz-form-field" data-enabled="true">
                        <div class="zaz-form-label">Select</div>
                        <div class="zaz-form-control">
                            <select name="select" width="1" class="zaz-required">
                                <option value="item1">Item 1</option>
                                <option value="item2">Item 2</option>
                                <option value="item3">Item 3</option>
                            </select>
                        </div>
                    </div>`;
                    break;
                case 'textarea':
                    html = `
                    <div class="zaz-form-field" data-enabled="true">
                        <div class="zaz-form-label">Textarea</div>
                        <div class="zaz-form-control">
                            <textarea name="textarea" cols="30" rows="5"></textarea>
                        </div>
                    </div>`;
                    break;
            }
            return html;
        },

        _knobClicked: function ($knob) {
            var strAction = $knob.attr('data-action');

            switch (strAction) {
                case 'design':
                    this.$builder.attr('data-mode', 'design');
                    $knob.attr('data-action', 'preview');
                    break;
                case 'preview':
                    this.$builder.attr('data-mode', 'preview');
                    $knob.attr('data-action', 'design');
                    break;
                case 'data':
                    this._getFormData();
                    break;
                case 'format':
                    this._getFormFormat();
                    break;

            }
        },

        _getFormData: function () {
            var data = {};

            $form = $('.zaz-form');
            $form.find('.zaz-form-section').each(function (s, section) {
                if ($(section).attr('data-enabled')) {
                    $(section).find('.zaz-form-group').each(function (g, group) {
                        var name = $(group).attr('data-group');
                        data[name] = {};
                        $(group).find('.zaz-form-field').each(function (c, field) {
                            var control = {};
                            var $control;
                            if ($(field).find('input').length) {
                                $control = $(field).find('input');
                            }
                            if ($(field).find('select').length) {
                                $control = $(field).find('select');
                            }
                            if ($(field).find('textarea').length) {
                                $control = $(field).find('textarea');
                            }
                            control.name = $control.attr('name');
                            control.value = $control.val();
                            data[name][control.name] = control.value;
                        });
                    });
                }
            });
            this.$json.empty();
            jsonTree.create(data, this.$json.get(0));
        },

        _getFormFormat: function () {
            var format = {};

            $form = $('.zaz-form');
            format.format = {
                stepmode: $form.attr('data-stepmode'),
                labels: $form.attr('data-labels'),
                controls: $form.attr('data-controls'),
                grouptitles: $form.attr('data-grouptitles')
            };
            format.sections = [];

            $form.find('.zaz-form-section').each(function (s, section) {
                format.sections[s] = {};
                format.sections[s].enabled = $(section).attr('data-enabled');
                format.sections[s].groups = [];
                $(section).find('.zaz-form-group').each(function (g, group) {
                    format.sections[s].groups[g] = {};
                    format.sections[s].groups[g].enabled = $(group).attr('data-enabled');
                    format.sections[s].groups[g].name = $(group).attr('data-group');
                    format.sections[s].groups[g].fields = [];
                    $(group).find('.zaz-form-field').each(function (f, field) {
                        var $field = $(field);
                        var $label = $field.find('.zaz-form-label');
                        var $control = $field.find('.zaz-form-control');
                        var controlType = $control.attr('data-type');
                        var htmlControlType;
                        if (['text', 'email', 'number', 'range', 'checkbox', 'radio'].indexOf(controlType) > -1) {
                            htmlControlType = 'input';
                        }
                        else {
                            htmlControlType = controlType;
                        }
                        var $htmlControl = $control.find(htmlControlType).first();
                        format.sections[s].groups[g].fields[f] = {
                            enabled: $field.attr('data-enabled'),
                            label: $label.text(),
                            name: $htmlControl.attr('name'),
                            required: true,
                            rules: [],
                            width: 30,
                            type: controlType
                        };
                    });
                });
            });
            this.$json.empty();
            jsonTree.create(format, this.$json.get(0));

            return format;
        },

        _bindListeners: function () {
            var context = this;

            this.$json.off('dblclick');
            this.$json.on('dblclick', function() {
                $(this).closest('.zaz-form-data').rotateClass(['normal','large','minimal']);
            });

            this.$features.find('.zaz-form-section').draggable({
                connectToSortable: '.zaz-form-items',
                helper: 'clone',
                revert: 'invalid',
                containment: '.zaz-form-builder'
            });

            this.$features.find('.zaz-form-group').draggable({
                connectToSortable: '.zaz-form-section',
                helper: 'clone',
                revert: 'invalid',
                containment: '.zaz-form-builder'
            });

            this.$features.find('.zaz-form-field').draggable({
                connectToSortable: '.zaz-form-group',
                helper: 'clone',
                revert: 'invalid',
                containment: '.zaz-form-builder'
            });

            this.$features.find('.zaz-form-setting').off('click');
            this.$features.find('.zaz-form-setting').on('click', function () {
                var strType = $(this).attr('data-type'),
                    strValue = $(this).attr('data-value');

                switch (strType) {
                    case 'labels':
                        strValue = strValue === 'inline' ? 'top' : 'inline'
                        break;
                    case 'stepmode':
                        strValue = strValue === 'disabled' ? 'enabled' : 'disabled'
                        if (strValue === 'disabled') {
                            $('.zaz-form-section').addClass('active');

                        } else {
                            $('.zaz-form-section').removeClass('active');
                            $('.zaz-form-section:eq(0)').addClass('active');
                        }
                        break;
                    case 'controls':
                        strValue = strValue === 'fixed' ? 'stretched' : 'fixed'
                        break;
                    case 'formtitle':
                        strValue = strValue === 'disabled' ? 'enabled' : 'disabled'
                        break;
                    case 'grouptitles':
                        strValue = strValue === 'disabled' ? 'enabled' : 'disabled'
                        break;
                }

                $(this).attr('data-value', strValue);
                $('.zaz-form').attr('data-' + strType, strValue);
            });

            this.$knobs.on('click keyup', '.knob', function (e) {
                if (e.type === 'click' || e.keyCode === framework.KEYS.ENTER || e.keyCode === framework.KEYS.SPACE) {
                    context._knobClicked($(this));
                }
            });

            this.element.find('input.theme').off('change');
            this.element.find('input.theme').on('change', function () {
                var intTheme = $(this).val();
                context.$form.attr('data-theme', 'theme-style' + intTheme);
            });
        }
    });
});