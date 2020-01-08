'use strict';

define([], function () {
    return {
        '': 'Special Case',

        //standard feature preferences - follow format PREFERENCE-featureName-key;
        'PREFERENCE-user-view': 'PREFERENCE for user named layout',
        'PREFERENCE-console-gadgets': 'PREFERENCE for gadgets loaded when application console is opened',
        'PREFERENCE-console-layout': 'PREFERENCE for layout application console is opened',
        'PREFERENCE-user-name': 'PREFERENCE for user name display',
        'PREFERENCE-user-font': 'PREFERENCE for application wide fonts name, color & size',
        'PREFERENCE-user-theme': 'PREFERENCE for application wide color theme',
        'PREFERENCE-user-language': 'PREFERENCE for language',
        'PREFERENCE-user-layout': 'PREFERENCE for layout controls',
        'PREFERENCE-user-toolbar': 'PREFERENCE for toolbar controls',
        'PREFERENCE-user-tab': 'PREFERENCE for tab controls',
        'PREFERENCE-user-mode': 'PREFERENCE for view mode of layout',

        //standard gadget preferences - follow format PREFERENCE-gadgetName-key;
        //##template
		'PREFERENCE-applicationInformation-settings': 'PREFERENCE for applicationInformation Gadget',
        'PREFERENCE-news-settings': 'PREFERENCE for news gadget',
        'PREFERENCE-chart-settings': 'PREFERENCE for chart gadget',
        'PREFERENCE-chart_1-settings': 'PREFERENCE for chart 1 gadget',
        'PREFERENCE-chart_2-settings': 'PREFERENCE for chart 2 gadget',
        'PREFERENCE-compare-settings': 'PREFERENCE for compare gadget',
        'PREFERENCE-applicationsChart-settings': 'PREFERENCE app chart gadget',
        'PREFERENCE-applicationsChart_1-settings': 'PREFERENCE for app chart 1 gadget',
        'PREFERENCE-applicationsChart_2-settings': 'PREFERENCE for app chart 2 gadget',
        'PREFERENCE-mapData-settings': 'PREFERENCE for map gadget',
        'PREFERENCE-applications-settings': 'PREFERENCE for applications gadget',
        'PREFERENCE-cars-settings': 'PREFERENCE for cars gadget'
    };
});