'use strict';

angular.module('halamanHeritageApp')
  .factory('services', function ($resource) {
    return $resource('places/:categoryId.json', {}, {
      query: {method:'GET', params:{categoryId:'categories'}, isArray:true}
    });
  });
