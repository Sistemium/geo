'use strict';

import GoogleMapsAPI from 'googlemaps';
import config from '../config/environment';

var publicConfig = {
  key: config.api.googleMapsAPI.key,
  stagger_time: 1000,
  encode_polylines: false,
  secure: true
};

var gmAPI = new GoogleMapsAPI(publicConfig);
var params = {
  origni: 'Vilnius',
  distance: 'Moscow'
};

gmAPI.directions(params, (err, response) => {
  if (err) {
    console.log(err);
  }

  console.log(response);
});
