define([], function () {
    var layouts = {
        maxZoneDepth: 3,
        multiWindow: true,
        autoClose: true,
        minZoneSize: 300,
        enableOrientation: true,
        enableSplitter: true,
        enableFlip: true,    
        enableToolbar: true,
        enableTab: true    
    };

    if (window.CONFIG.debug) {
        window.layouts = layouts;
    }

    return layouts;
});
