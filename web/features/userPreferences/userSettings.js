define([

], function () {

    var userSettings = {
        panes: {
            name: {
                enabled: 1,
                options: {
                    nameFormat: 1
                }
            },
            font: {
                enabled: 1,
                options: {
                    family: 1,
                    size: 1,
                    weight: 1,
                    color: 1,
                    style: 1
                }
            },
            theme: {
                enabled: 1,
                options: {
                    themeColor: 1
                }
            },
            language: {
                enabled: 1
            },
            layout: {
                enabled: 1,
                options: {
                    splitter: 1,
                    flip: 1,
                    orient: 1,
                    tab: 1,
                    toolbar: 1
                }
            },
            toolbar: {
                enabled: 1
            },
            tab: {
                enabled: 1
            },
            mode: {
                enabled: 1
            },
            reset: {
                enabled: 1
            },
            instantApply: {
                enabled: 1
            }
        },

        systemFonts: [
            {
                label: 'Arial',
                value: 'Arial'
            },
            {
                label: 'Calibri',
                value: 'Calibri'
            },
            {
                label: 'Cambria',
                value: 'Cambria'
            },
            {
                label: 'Comic Sans MS',
                value: 'Comic Sans MS'
            },
            {
                label: 'Consolas',
                value: 'Consolas'
            },
            {
                label: 'Courier New',
                value: 'Courier New'
            },
            {
                label: 'Georgia',
                value: 'Georgia'
            },
            {
                label: 'Lucida Console',
                value: 'Lucida Console'
            },
            {
                label: 'Lucida Sans Unicode',
                value: 'Lucida Sans Unicode'
            },
            {
                label: 'Microsoft Sans Serif',
                value: 'Microsoft Sans Serif'
            },
            {
                label: 'MS Gothic',
                value: 'MS Gothic'
            },
            {
                label: 'Segoe UI',
                value: 'Segoe UI'
            },
            {
                label: 'Symbol',
                value: 'Symbol'
            },
            {
                label: 'Tahoma',
                value: 'Tahoma'
            },
            {
                label: 'Times New Roman',
                value: 'Times New Roman'
            },
            {
                label: 'Trebuchet MS',
                value: 'Trebuchet MS'
            },
            {
                label: 'Verdana',
                value: 'Verdana'
            }
        ],

        systemFontSizes: [{
                label: '10pt',
                value: '10'
            },
            {
                label: '12pt',
                value: '12'
            },
            {
                label: '14pt',
                value: '14'
            },
            {
                label: '16pt',
                value: '16'
            },
            {
                label: '18pt',
                value: '18'
            },
            {
                label: '20pt',
                value: '20'
            },
            {
                label: '22pt',
                value: '22'
            },
            {
                label: '24pt',
                value: '24'
            },
            {
                label: '26pt',
                value: '26'
            },
            {
                label: '28pt',
                value: '28',
                disabled: true
            }
        ],

        nameFormats: [{
                label: 'Lastname, Firstname',
                value: 'L, F'
            },
            {
                label: 'Firstname',
                value: 'F'
            },
            {
                label: 'Lastname',
                value: 'L',
                disabled: true
            },
            {
                label: 'Firstname Middle. Lastname',
                value: 'F M. L'
            }
        ],

        languages: [{
                label: 'English',
                value: 'en'
            },
            {
                label: 'Chinese',
                value: 'zn-ch'
            },
            {
                label: 'Spanish',
                value: 'es'
            },
            {
                label: 'Hindi',
                value: 'hi'
            },
            {
                label: 'Arabic',
                value: 'ar'
            },
            {
                label: 'Portugese',
                value: 'pt'
            },
            {
                label: 'Bangla',
                value: 'bn'
            },
            {
                label: 'Russian',
                value: 'ru'
            },
            {
                label: 'Japanese',
                value: 'ja'
            },
            {
                label: 'Panjabi',
                value: 'pa'
            },
            {
                label: 'Javanese',
                value: 'jv'
            },
            {
                label: 'German',
                value: 'de'
            },
            {
                label: 'Korean',
                value: 'ko'
            },
            {
                label: 'French',
                value: 'fr'
            },
            {
                label: 'Telugu',
                value: 'te'
            },
            {
                label: 'Marathi',
                value: 'mr'
            },
            {
                label: 'Turkish',
                value: 'tr'
            },
            {
                label: 'Tamil',
                value: 'ta'
            },
            {
                label: 'Vietnamese',
                value: 'vi'
            },
            {
                label: 'Urdu',
                value: 'ur'
            }
        ],

        themes: [{
                label: 'Default',
                value: 'default',
                themecolor: '#004488',
                description: 'Default theme',
                font: {
                    family: 'Verdana',
                    size: '10',
                    weight: false,
                    style: false,
                    color: '#000000'
                },
                layout: {
                    splitter: true,
                    flip: true,
                    orient: true,
                    tab: true,
                    toolbar: true
                },
                mode: 'city',
                toolbar: 'top',
                tab: 'default',
            },
            {
                label: 'Steadfast',
                value: 'steadfast',
                themecolor: '#005577',
                description: 'Gray scaled theme',
                font: {
                    family: 'Tahoma',
                    size: '10',
                    weight: false,
                    style: false,
                    color: '#000000'
                },
                layout: {
                    splitter: true,
                    flip: true,
                    orient: true,
                    tab: false,
                    toolbar: true
                },
                mode: 'city',
                toolbar: 'left',
                tab: 'flat'
            },
            {
                label: 'Space Dark',
                value: 'spacedark',
                themecolor: '#000000',
                description: 'Night theme',
                font: {
                    family: 'Times New Roman',
                    size: '10',
                    weight: false,
                    style: false,
                    color: '#000000'
                },
                layout: {
                    splitter: false,
                    flip: false,
                    orient: false,
                    tab: true,
                    toolbar: true
                },
                mode: 'country',
                toolbar: 'right',
                tab: 'float'
            },
            {
                label: 'Bloody Mary',
                value: 'bloodymary',
                themecolor: '#770000',
                description: 'Dark red flat theme',
                font: {
                    family: 'Georgia',
                    size: '10',
                    weight: false,
                    style: true,
                    color: '#000000'
                },
                layout: {
                    splitter: true,
                    flip: false,
                    orient: true,
                    tab: true,
                    toolbar: true
                },
                mode: 'town',
                toolbar: 'bottom',
                tab: 'default'
            },
            {
                label: 'Serene Meadow',
                value: 'serenemeadow',
                themecolor: '#003300',
                description: 'Dark green theme',
                font: {
                    family: 'monospace',
                    size: '8',
                    weight: false,
                    style: true,
                    color: '#000000'
                },
                layout: {
                    splitter: true,
                    flip: true,
                    orient: false,
                    tab: true,
                    toolbar: false
                },
                mode: 'city',
                toolbar: 'top',
                tab: 'flat'
            }
        ],

        toolbar: [{
                label: 'Top',
                value: 'top'
            },
            {
                label: 'Left',
                value: 'left'
            },
            {
                label: 'Right',
                value: 'right'
            },
            {
                label: 'Bottom',
                value: 'bottom'
            },
        ],

        tab: [{
                label: 'Smooth',
                value: 'default'
            },
            {
                label: 'Flat',
                value: 'flat'
            },
            {
                label: 'Float',
                value: 'float'
            }
        ],

        mode: [{
                label: 'City',
                value: 'city'
            },
            {
                label: 'Town',
                value: 'town'
            },
            {
                label: 'Country',
                value: 'country'
            }
        ]
    };

    if (window.CONFIG.debug) {
        window.userSettings = userSettings;
    }

    return userSettings;
});