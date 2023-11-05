var google;

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var venueCoordinates = new google.maps.LatLng(12.979172533215403, 77.54862287175516);

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,
    mapTypeControl: false,
    streetViewControl: false,

    // The latitude and longitude to center the map (always required)
    center: venueCoordinates,

    // How you would like to style the map.
    scrollwheel: true,
    styles: [
      {
        featureType: 'administrative.land_parcel',
        elementType: 'all',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'all',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }, { lightness: 20 }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ hue: '#f49935' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{ hue: '#fad959' }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [{ visibility: 'simplified' }]
      },
      {
        featureType: 'road.local',
        elementType: 'labels',
        stylers: [{ visibility: 'simplified' }]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [{ hue: '#a1cdfc' }, { saturation: 30 }, { lightness: 49 }]
      }
    ]
  };

  // Get the HTML DOM element that will contain your map
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('map');

  // Create the Google Map using out element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: venueCoordinates,
    map: map
  });

  marker.on('click', function() {
    window.open(
      'https://maps.google.com/maps?ll=12.979173,77.548623&z=15&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=5496535170827779147',
      '_blank'
    );
  });
}
google.maps.event.addDomListener(window, 'load', init);
