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
        valid: false,
        options: {},

        form: {
            format: {
                theme: 'style1',
                stepmode: 'disabled', // or enabled
                labels: 'placeholder', //or top, none, placeholder
                controls: 'fixed', //or stretched
                formtitle: 'enabled', // or disabled
                grouptitles: 'enabled' // or disabled
            },
            header: {
                title: 'User Information',
                enabled: true
            },
            footer: {
                enabled: true
            },
            errors: {
                enabled: true
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
                                name: 'firstName',
                                type: 'text',
                                required: true,
                                width: 200,
                                rules: ['regex']
                            },
                            {
                                enabled: true,
                                label: 'Last Name',
                                name: 'lastName',
                                type: 'text',
                                required: true,
                                width: 200,
                                rules: ['regex']
                            }
                            // ,
                            // {
                            //     enabled: true,
                            //     label: 'Desc',
                            //     name: 'desc',
                            //     type: 'textarea',
                            //     required: true,
                            //     width: 250,
                            //     rules: ['regex']
                            // }
                        ]
                    }
                    // , 
                    // {
                    //     name: 'meta',
                    //     title: 'Meta Details',
                    //     enabled: true,
                    //     fields: [{
                    //             enabled: true,
                    //             label: 'Age',
                    //             name: 'age',
                    //             type: 'number',
                    //             required: true,
                    //             width: 50,
                    //             rules: ['regex']
                    //         },
                    //         {
                    //             enabled: true,
                    //             label: 'Work',
                    //             name: 'work',
                    //             type: 'checkbox',
                    //             display: 'row',
                    //             required: true,
                    //             rules: ['regex'],
                    //             items: [{
                    //                 title: 'Home',
                    //                 value: 'home'
                    //             },{
                    //                 title: 'Office',
                    //                 value: 'office'
                    //             },{
                    //                 title: 'Hoteling',
                    //                 value: 'hoteling'
                    //             }]
                    //         },
                    //         {
                    //             enabled: true,
                    //             label: 'Income',
                    //             name: 'income',
                    //             type: 'radio',
                    //             display: 'column',
                    //             required: true,
                    //             rules: ['regex'],
                    //             items: [{
                    //                 title: '30 - 50',
                    //                 value: '50'
                    //             },{
                    //                 title: '51 - 80',
                    //                 value: '80'
                    //             }]
                    //         }
                    //     ]

                    // }
                ]
                },
                {
                    enabled: true,
                    groups: [{
                        name: 'address',
                        title: 'User Location',
                        enabled: true,
                        fields: [{
                                enabled: true,
                                label: 'Street 1',
                                name: 'address.street1',
                                type: 'text',
                                required: true,
                                width: 250,
                                rules: ['regex']
                            },
                            {
                                enabled: true,
                                label: 'Street 2',
                                name: 'address.street2',
                                type: 'text',
                                // required: true,
                                width: 250,
                                rules: ['regex']
                            },
                            {
                                enabled: true,
                                label: 'City',
                                name: 'address.city',
                                type: 'text',
                                required: true,
                                width: 100,
                                rules: ['regex']
                            },
                            {
                                enabled: true,
                                label: 'State',
                                name: 'address.state',
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
                                name: 'address.zip',
                                type: 'text',
                                required: true,
                                width: 100,
                                rules: ['regex']
                            }
                        ]
                    }]
                }
            ]
        },

        _create: function () {
            this._super();
            this._renderLayout();
            this._renderForm();
            this._setData();
            this._bindListeners();
        },

        _setData: function () {
            var data = {
                firstName: 'Murali',
                lastName: 'K',
                address: {
                    street1: 'Sample Dr',
                    // city: 'Brambleton',
                    state: 'VA',
                    zip: 20148
                }
            };
            this.$content.zazForm('setData', data);
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
                config: this.form,
                change: this._onChange,
                submit: this._onSubmit
            });
        },

        _onChange: function (e, isValid, errors) {
            this.valid = isValid;
            if (errors) {
                // console.log(errors)
            }
        },


        _onSubmit: function (e, data) {
            console.log('submit can be done here!')
        },

        _bindListeners: function () {

        }
    });
});