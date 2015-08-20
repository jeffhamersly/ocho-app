exports.getGeolocation = function(callback) {
	
	Ti.Geolocation.purpose = "This allows you to view members in locations around you.";

	function translateErrorCode(code) {
		if (code == null) {
			return null;
		}
		switch (code) {
			case Ti.Geolocation.ERROR_LOCATION_UNKNOWN:
				return "Location unknown";
			case Ti.Geolocation.ERROR_DENIED:
				return "Access denied";
			case Ti.Geolocation.ERROR_NETWORK:
				return "Network error";
			case Ti.Geolocation.ERROR_HEADING_FAILURE:
				return "Failure to detect heading";
			case Ti.Geolocation.ERROR_REGION_MONITORING_DENIED:
				return "Region monitoring access denied";
			case Ti.Geolocation.ERROR_REGION_MONITORING_FAILURE:
				return "Region monitoring access failure";
			case Ti.Geolocation.ERROR_REGION_MONITORING_DELAYED:
				return "Region monitoring setup delayed";
		}
	}
	
	if (Titanium.Geolocation.locationServicesEnabled === false){
		Titanium.UI.createAlertDialog({title: Alloy.Globals.project, message: 'Your device has geo turned off - turn it on.'}).show();
	}else{
		if (Titanium.Platform.name != 'android') {
			var authorization = Titanium.Geolocation.locationServicesAuthorization;
			Ti.API.info('Authorization: '+authorization);
			if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
				Ti.UI.createAlertDialog({
					title: Alloy.Globals.project,
					message:'You have disallowed' + Alloy.Globals.project + ' from running geolocation services.'
				}).show();
				return;
			} else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
				Ti.UI.createAlertDialog({
					title: Alloy.Globals.project,
					message:'Your system has disallowed' + Alloy.Globals.project + ' from running geolocation services.'
				}).show();
				return;
			}
		}
	
		//
		//  SET ACCURACY - THE FOLLOWING VALUES ARE SUPPORTED
		//
		// Titanium.Geolocation.ACCURACY_BEST
		// Titanium.Geolocation.ACCURACY_NEAREST_TEN_METERS
		// Titanium.Geolocation.ACCURACY_HUNDRED_METERS
		// Titanium.Geolocation.ACCURACY_KILOMETER
		// Titanium.Geolocation.ACCURACY_THREE_KILOMETERS
		//
		Titanium.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
		Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	
		//
		//  SET DISTANCE FILTER.  THIS DICTATES HOW OFTEN AN EVENT FIRES BASED ON THE DISTANCE THE DEVICE MOVES
		//  THIS VALUE IS IN METERS
		//
		Titanium.Geolocation.distanceFilter = 10;
	
		//
		// GET CURRENT POSITION - THIS FIRES ONCE
		Titanium.Geolocation.getCurrentPosition(function(e)
		{
			// if (!e.success || e.error)
			// {
				// currentLocation.text = 'error: ' + JSON.stringify(e.error);
				// Ti.API.info("Code translation: "+translateErrorCode(e.code));
				// //alert('error ' + JSON.stringify(e.error));
// 				
				// return;
			// }
	
			// var longitude = e.coords.longitude;
			// var latitude = e.coords.latitude;
			// var altitude = e.coords.altitude;
			// var heading = e.coords.heading;
			// var accuracy = e.coords.accuracy;
			// var speed = e.coords.speed;
			// var timestamp = e.coords.timestamp;
			// var altitudeAccuracy = e.coords.altitudeAccuracy;
			//Ti.API.info('speed ' + speed);
			//currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;
			
	
			//Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
			// Titanium.Geolocation.reverseGeocoder(latitude, longitude, function(evt){
				// if (evt.success) {
					// var places = evt.places;
					// if (places && places.length) {
						// //reverseGeo.text = places[0].address;
					// } else {
						// //reverseGeo.text = "No address found";
					// }
					// Ti.API.debug("reverse geolocation result = "+JSON.stringify(evt));
					// Titanium.API.info(places[0].address);
					// //alert(places[0].address);
				// }
				// else {
					// Ti.UI.createAlertDialog({
						// title:'Reverse geo error',
						// message: evt.error
					// }).show();
					// Ti.API.info("Code translation: "+translateErrorCode(evt.code));
				// }
// 				
			// });
			
			callback(e);
		});
		
		
	
		//
		// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
		//
		locationAdded = true;
	}

};
