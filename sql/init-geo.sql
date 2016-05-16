grant connect to prt;
grant dba to prt;

util.setUserOption 'asamium.default.domain', 'prt';

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
