'use strict';
// TODO: divide to multiple services for multiple queries.
angular.module('halamanHeritageApp')
  .factory('services', function ($http, $q) {
    return {
			getData: function() {
								var deffered = $q.defer();

								// TODO: change this to query using POST on php during production
								$http.get('places/categories.json').then(function(result) {
									var parents = result.data;
									var categories = [];

									angular.forEach(result.data, function(value, key){
										angular.forEach(value, function(name, tables){

											$http.get('places/' + name + '.json').then(function(result) {
												var places = result.data;
												var prettify = name.split('_').join(' ');

												categories.push(
													{
														rawName: name,
														name: ucwords(prettify),
														places: places
													});
											});
										});
									});

									deffered.resolve(categories);
								});

								return deffered.promise;
						},

			getDetail: function(category, id) {
				var deffered = $q.defer();

				$http.get('places/' + category + '.json').then(function(result) {
					var details;
					angular.forEach(result.data, function(place, key){
						if (place.id == id) {
							details = place;
						};
					});

					deffered.resolve(details);
				});

				return deffered.promise;
			},

			getMarkers: function() {
								var deffered = $q.defer();

								// TODO: change this to query using POST on php during production
								$http.get('places/categories.json').then(function(result) {
									var parents = result.data;
									var markers = [];

									angular.forEach(result.data, function(value, key){
										angular.forEach(value, function(name, tables){

											$http.get('places/' + name + '.json').then(function(result) {
												var places = result.data;

												angular.forEach(places, function(place, key2){
													markers.push({
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

									deffered.resolve(markers);
								});

								return deffered.promise;
			}
    }
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
