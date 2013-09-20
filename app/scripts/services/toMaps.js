'use strict';

angular.module('halamanHeritageApp')
  .factory('toMaps', function () {
    return {
    	set: false,
    	id: -1,
    	latitude: 0,
    	longitude: 0,
      infoWindow:"",
    };
  });
