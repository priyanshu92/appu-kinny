var google;

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  // var myLatlng = new google.maps.LatLng(40.71751, -73.990922);
  var myLatlng = new google.maps.LatLng(12.979158, 77.5460328);
  // 39.399872
  // -8.224454

  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: myLatlng,

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

  var address = 'Sapthapadi Sapthagiri Palace';

  $.getJSON(
    'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBKxlc6WNHS_Y4Ry1LZ_6oXfKj4PIDlWS4&address=' +
      address +
      '&sensor=false',
    null,
    function (data) {
      var place = data.results[0];
      var p = place.geometry.location;
      var latlng = new google.maps.LatLng(p.lat, p.lng);
      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: 'images/loc.png'
      });

      google.maps.event.addListener(marker, 'click', () => {
        const content = document.createElement('div');
        const nameElement = document.createElement('h2');

        nameElement.textContent = place.name;
        content.appendChild(nameElement);

        const placeIdElement = document.createElement('p');

        placeIdElement.textContent = place.place_id;
        content.appendChild(placeIdElement);

        const placeAddressElement = document.createElement('p');

        placeAddressElement.textContent = place.formatted_address;
        content.appendChild(placeAddressElement);
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    }
  );
}
google.maps.event.addDomListener(window, 'load', init);
