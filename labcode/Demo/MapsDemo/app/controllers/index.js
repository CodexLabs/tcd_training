// add some annotations, must be done in code
var anno1 = Alloy.Globals.Map.createAnnotation({
    title:"Mountain View", 
    latitude:37.389569, 
    longitude:-122.050212
});
$.map.addAnnotation(anno1);
 

// add the iOS7-specific camera view 
if(OS_IOS && parseInt(Ti.Platform.version, 10)>=7) {
    var cam = Alloy.Globals.Map.createCamera({
        altitude: 300, 
        centerCoordinate: {
            latitude:37.389569, 
            longitude:-122.050212
        }, 
        heading: -45, 
        pitch: 60,
        showsBuildings: true
    });
    var animCam = function(){
        $.map.removeEventListener('complete', animCam);
        $.map.animateCamera({
            camera: cam,
            curve: Ti.UI.ANIMATION_CURVE_EASE_IN,
            duration: 500
        });
    };
    $.map.addEventListener('complete', animCam);
}

// some map types are not unified across platforms
if(OS_ANDROID) {
    $.map1.mapType = Alloy.Globals.Map.TERRAIN_TYPE;
} else {
    $.map1.mapType = Alloy.Globals.Map.SATELLITE_TYPE;
}


$.win.open();
