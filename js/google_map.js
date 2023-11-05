var google;

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var venueCoordinates = new google.maps.LatLng(12.979172533215403, 77.54862287175516);
  var venueName = 'Sapthapadi Sapthagiri Palace';
  var venueAddress =
    '15/18, Chord Rd, Rajaji Nagar Industrial Town, Rajajinagar, Bengaluru, Karnataka 560044, India';

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

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
    map: map,
    icon: 'images/loc.png'
  });

  const infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(marker, 'click', () => {
    const content = document.createElement('div');
    const nameElement = document.createElement('h2');

    nameElement.textContent = venueName;
    content.appendChild(nameElement);

    const placeAddressElement = document.createElement('p');

    placeAddressElement.textContent = venueAddress;
    content.appendChild(placeAddressElement);
    infowindow.setContent(content);
    infowindow.open(map, marker);
  });
}
google.maps.event.addDomListener(window, 'load', init);
