exports.getGeolocation = function(callback) {
    Ti.Geolocation.purpose = "This allows you to view members in locations around you.";
    if (false === Titanium.Geolocation.locationServicesEnabled) Titanium.UI.createAlertDialog({
        title: Alloy.Globals.project,
        message: "Your device has geo turned off - turn it on."
    }).show(); else {
        var authorization = Titanium.Geolocation.locationServicesAuthorization;
        Ti.API.info("Authorization: " + authorization);
        if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
            Ti.UI.createAlertDialog({
                title: Alloy.Globals.project,
                message: "You have disallowed" + Alloy.Globals.project + " from running geolocation services."
            }).show();
            return;
        }
        if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
            Ti.UI.createAlertDialog({
                title: Alloy.Globals.project,
                message: "Your system has disallowed" + Alloy.Globals.project + " from running geolocation services."
            }).show();
            return;
        }
        Titanium.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
        Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
        Titanium.Geolocation.distanceFilter = 10;
        Titanium.Geolocation.getCurrentPosition(function(e) {
            callback(e);
        });
        locationAdded = true;
    }
};