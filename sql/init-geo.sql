grant connect to geo;
grant dba to geo;

util.setUserOption 'asamium.default.domain', 'geo';

meta.defineType 'direction';
meta.defineType 'distance:INTEGER';
meta.defineType 'duration:INTEGER';
meta.defineType 'startLocationLat:FLOAT';
meta.defineType 'startLocationLng:FLOAT';
meta.defineType 'endLocationLat:FLOAT';
meta.defineType 'endLocationLng:FLOAT';

meta.defineEntity 'Direction',
 'direction;distance;duration;startLocationLat;startLocationLng;endLocationLat;endLocationLng'
;

meta.createTable 'Direction',0,1;
