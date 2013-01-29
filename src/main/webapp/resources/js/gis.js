var map = null;
var geocoder = null;
var savedLatLng = null;
var address = null;
var redFlag = "resources/images/red-flag.png";
var shadow = "resources/images/red-flag-shadow.png";
var contentString = null;
var bounds = new google.maps.LatLngBounds();

jQuery(document).ready(function($) {
	$('#map').hide();
	load();
	$('#map').fadeIn(1000);
	// add items
	// map.fitBounds(bounds);
});

function codeAddress(loct, info) {
	geocoder.geocode({
		'latLng' : loct
	}, function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			var marker = new google.maps.Marker({
				map : map,
				icon : redFlag,
				shadow: shadow,
				animation : google.maps.Animation.DROP,
				position : loct
			});
			var infowindow = new google.maps.InfoWindow({
				maxWidth : 270,
				content : info,
				disableAutoPan : false
			});
			// infowindow.open(map, marker);
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}
	});
}

function load() {
	geocoder = new google.maps.Geocoder();
	var melbourne = new google.maps.LatLng(-37.814107, 144.96328);
	var myOptions = {
		zoom : 11,
		center : melbourne,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		mapTypeControlOptions : {
			style : google.maps.MapTypeControlStyle.DROPDOWN_MENU
		}
	};
	
	map = new google.maps.Map(document.getElementById('map'), myOptions);

	google.maps.event
			.addListener(
					map,
					'bounds_changed',
					function() {
						var mapBoundsSW = map.getBounds().getSouthWest();
						var mapBoundsNE = map.getBounds().getNorthEast();
						var boundsPar = 'x1=' + mapBoundsSW.lat() + '&y1='
								+ mapBoundsSW.lng() + '&x2='
								+ mapBoundsNE.lat() + '&y2='
								+ mapBoundsNE.lng();
						$
								.ajax({
									type : 'GET',
									url : 'map',
									data : boundsPar,
									cache : false,
									dataType : 'json',
									success : function(items) {
										for(var item in items){
											coord = new google.maps.LatLng(items[item].lat, items[item].lng);
									 		var contentString = '<div id="mcwrap"><span>Test</span><br />' + items[item].name + '</div>';									 		
											codeAddress(coord,contentString);
									    }
									}
								});
					});
}
