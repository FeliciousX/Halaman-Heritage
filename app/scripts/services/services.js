'use strict';
// TODO: handles errors in promises.
var services = angular.module('halamanHeritageApp')
  .factory('services', function ($http) {

  	var myData = {
									detailsData: {},
									categories: [],
									markers: []
								};

  	var promise = $http.get('places/categories.json').then(function(result) {
											var parents = result.data;
											var markers = [];

											angular.forEach(result.data, function(value, key){
												angular.forEach(value, function(name, tables){

													$http.get('places/' + name + '.json').then(function(result) {
														var places = result.data;
														var prettify = name.split('_').join(' ');

														myData.categories.push(
															{
																rawName: name,
																name: ucwords(prettify),
																places: places
															});

														angular.forEach(places, function(place, key2){
															myData.markers.push({
																latitude: place.latitude,
																longitude: place.longitude,
																infoWindow: '<h3>' + place.name + '</h3>' +
																						'<p><a class="btn" href="#/category/' + name + '/' + place.id + '/details">More details</a>' +
																						'<a class="btn" href="#/maps/' + place.latitude + '/' + place.longitude +  '/navigate">Navigate Here</a></p>', //TODO implement navigation!
																icon: 'img/markers/' + name + '.png'
															});
														});
													});
												});
											});
										});

		return {
      promise:promise,
      setData: function (data) {
          myData = data;
      },
      getData: function () {
          return myData;
      },
      getDetail: function (categoryId, placeId) {
      	var result = {};
      	angular.forEach(myData.categories, function(places, key){
	        if (places.rawName == categoryId) {
            angular.forEach(places, function(place, key2){
            	angular.forEach(place, function(item, key3){
            		  if (item.id == placeId) {
            		    result = item;
            		    return;
            		  };
            	})
            });
	        };
    		});
    		return result;
      }
    };
  });

function ucwords (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // +   improved by: Waldo Malqui Silva
  // +   bugfixed by: Onno Marsman
  // +   improved by: Robin
  // +      input by: James (http://www.james-bell.co.uk/)
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // *     example 1: ucwords('kevin van  zonneveld');
  // *     returns 1: 'Kevin Van  Zonneveld'
  // *     example 2: ucwords('HELLO WORLD');
  // *     returns 2: 'HELLO WORLD'
  return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {
    return $1.toUpperCase();
  });
}
