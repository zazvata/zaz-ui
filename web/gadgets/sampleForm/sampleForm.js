define([
    'jquery.plugins',
    'handlebars-helpers',
    'framework/framework',
    'widgets/zazForm/zazForm',
    'css!gadgets/sampleForm/sampleForm'
], function ($,
    HBS,
    framework,
    zazForm) {

    return $.widget('zaz.sampleForm', framework.baseGadget, {
        options: {},

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
                                label: 'Age',
                                name: 'age',
                                type: 'number',
                                required: true,
                                width: 50,
                                rules: ['regex']
                            },
                            {
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
                                },{
                                    title: 'Office',
                                    value: 'office'
                                },{
                                    title: 'Hoteling',
                                    value: 'hoteling'
                                }]
                            },
                            {
                                enabled: true,
                                label: 'Income',
                                name: 'income',
                                type: 'radio',
                                display: 'column',
                                required: true,
                                rules: ['regex'],
                                items: [{
                                    title: '30 - 50',
                                    value: '50'
                                },{
                                    title: '51 - 80',
                                    value: '80'
                                }]
                            }
                        ]

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
                                label: 'Address Line 1',
                                name: 'address1',
                                type: 'text',
                                required: true,
                                width: 250,
                                rules: ['regex']
                            },
                            {
                                enabled: true,
                                label: 'Address Line 2',
                                name: 'address2',
                                type: 'text',
                                required: true,
                                width: 250,
                                rules: ['regex']
                            },
                            {
                                enabled: true,
                                label: 'City',
                                name: 'city',
                                type: 'text',
                                required: true,
                                width: 100,
                                rules: ['regex']
                            },
                            {
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
                                },{
                                    title: 'Virginia',
                                    value: 'VA'
                                },{
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
                            }
                        ]
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
                                },{
                                    title: 'Forms Admin',
                                    value: 'FRM_ADM'
                                },{
                                    title: 'Forms Manager',
                                    value: 'FRM_MGR'
                                }]
                            },
                            {
                                enabled: true,
                                label: 'Description',
                                name: 'desc',
                                type: 'textarea',
                                required: true,
                                width: 300,
                                rules: ['regex']
                            }
                        ]
                    }, {
                        name: 'account',
                        title: 'Account Details',
                        enabled: true,
                        fields: [{
                            enabled: true,
                            label: 'Account #',
                            name: 'account_number',
                            type: 'text',
                            required: true,
                            width: 100,
                            rules: ['regex']
                        }]
                    }]
                }
            ]
        },

        _create: function () {
            this._super();
            this._renderLayout();
            this._renderForm();
            this._bindListeners();
        },

        _renderLayout: function () {
            var strHtml = HBS['gadgets/sampleForm/sampleForm']({
                items: framework.languageManager.translations()
            });

            this.element.append(strHtml);
            this.$content = this.element.find('.gadget-content');
        },

        _renderForm: function () {
            this.$content.zazForm({
                'config': this.form
            });
        },

        _bindListeners: function () {

        }
    });
});