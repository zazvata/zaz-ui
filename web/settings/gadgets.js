'use strict';
define([
    'settings/globals'
], function (
    globals
) {
    return {
        //##template
        formBuilder: {
            title: 'Form Builder',
            desc: 'Form Builder Framework',
            icon: 'input',
            iconClass: 'icon-class-forms',
            viewers: [globals.CONSOLE],
            roles: ['admin']
        },
        sampleForm: {
            title: 'Sample Form',
            desc: 'Simple Form based on zazForm Widget',
            icon: 'input',
            iconClass: 'icon-class-forms',
            viewers: [globals.CONSOLE],
            roles: ['user']
        },
        docViewer: {
            title: 'PDF Viewer',
            desc: 'Simple PDF Viewer using IFRAME',
            icon: 'picture_as_pdf',
            iconClass: 'icon-class-pdf',
            viewers: [globals.CONSOLE],
            roles: ['user']
        },
        applications: {
            title: 'APPLICATIONS',
            desc: 'Shows basic workflow with instant notifications',
            icon: 'class',
            iconClass: 'icon-class-applications',
            showCount: true,
            viewers: [globals.CONSOLE],
            roles: ['user', 'admin']
        },
        applicationsChart: {
            title: 'APPLICATIONS-CHART',
            desc: 'Applications chart with instant update',
            icon: 'insert_chart',
            iconClass: 'icon-class-chart',
            cloneable: true,
            pinnable: true,
            viewers: [globals.CONSOLE],
            roles: ['user', 'admin']
        },
        dataGrid: {
            title: 'DATAGRID',
            desc: 'Demonstrates zaz-grid widget features',
            icon: 'grid_on',
            iconClass: 'icon-class-grid',
            viewers: [globals.CONSOLE],
            roles: ['user']
        },
        cars: {
            title: 'Cars',
            desc: 'Grid with 100K rows of data',
            icon: 'view_day',
            iconClass: 'icon-class-cars',
            viewers: [globals.CONSOLE],
            roles: ['user']
        },
        mapData: {
            title: 'MAP',
            desc: 'Demonstrates Google Maps API integration',
            icon: 'location_on',
            iconClass: 'icon-class-map',
            viewers: [globals.CONSOLE],
            roles: ['user']
        },
        news: {
            title: 'NEWS',
            desc: 'Demonstrates live feed using Google News API',
            icon: 'view_array',
            iconClass: 'icon-class-news',
            viewers: [globals.CONSOLE],
            persistable: true,
            roles: ['user', 'admin']
        },
        lab: {
            title: 'Widget Lab',
            desc: 'Testing of Widgets under development',
            icon: 'build',
            iconClass: 'icon-class-lab',
            viewers: [globals.CONSOLE],
            roles: ['user']
        },

        // viewer gadgets
        applicationInformation: {
            title: 'COMPARE',
            desc: 'A simple DIFF-MATCH-PATCH text comparison',
            icon: 'compare_arrows',
            iconClass: 'icon-class-compare',
            viewers: ['viewer'],
            roles: ['user', 'admin']
        }
    };
});