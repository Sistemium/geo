'use strict';

import GoogleMapsAPI from 'googlemaps';
import config from '../../config/environment';
import direction from '../stapi/models/direction.model';


var publicConfig = {
  key: config.api.googleMapsAPI.key,
  stagger_time: 1000,
  secure: true
};

var gmAPI = new GoogleMapsAPI(publicConfig);
var params = {
  origin: process.argv[2],
  destination: process.argv[3]
};

function getDirections(params) {
  gmAPI.directions(params, (err, response) => {
    if (err) {
      console.log(err);
    }

    direction().save({
        direction: JSON.stringify(response),
        distance: response.routes[0].legs[0].distance.value,
        duration: response.routes[0].legs[0].duration.value,
        startLocationLat: response.routes[0].legs[0].start_location.lat,
        startLocationLng: response.routes[0].legs[0].start_location.lng,
        endLocationLat: response.routes[0].legs[0].end_location.lat,
        endLocationLng: response.routes[0].legs[0].end_location.lng
      })
      .then((entity) => {
        console.log('Direction have been saved:', entity);
        console.log(entity);
      })
      .catch((err) => {
        console.log('Error occurred while saving:', err);
      })
  });
}

getDirections(params);
