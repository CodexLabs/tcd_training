Ti.API.info('seeded: ' + Ti.App.Properties.hasProperty('seeded'));
//determine if the database needs to be seeded
if (!Ti.App.Properties.hasProperty('seeded')) {

	// Use the HTTPClient object to send a GET request to 
	// http://bountyhunterapp.appspot.com/bounties and process the returned data.
	// It returns an array of objects in the form [{name: 'Jeff Haynie'}, ...]
	
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function() {
	
		Ti.API.info('got data from the network: ' + this.responseText);
		var names = JSON.parse(this.responseText);
		for(var i=0,j=names.length;i<j;i++) {
			var criminal = Alloy.createModel('fugitives', { name: names[i].name});
			criminal.save();
		}
		// set our app property so this code doesn't run next time
	    Ti.App.Properties.setString('seeded', 'yuppers');
		// force tables to update
		//Alloy.Collections.Fugitives.fetch();
		
	};
	xhr.open("GET","http://bountyhunterapp.appspot.com/bounties");
	xhr.send();
    $.tabGroup.open();

} else {

    $.tabGroup.open();

}

// force tables to update
//Alloy.Collections.Fugitives.fetch();