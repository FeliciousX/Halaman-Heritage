'use strict';
// TODO: clean data and write e2e tests
angular.module('halamanHeritageApp')
  .controller('CategoriesCtrl', function ($scope, services) {
  	$scope.category = [];
  	$scope.places = [];

  	var nameRaw = [];
  	var placeArray = [];

    services.query( function (result) {
  		for (var i = 0; i < result.length; i++) {
		   	nameRaw.push(result[i]["Tables_in_halaman_heritage"]);
		   	var name = nameRaw[i];
		   	if (name.indexOf('_') >= 0) {
		   		name = name.split('_').join(" ");
		   	};

		   	name = ucwords(name);

		   	$scope.category.push({
		   		category: name,
		   		raw: nameRaw[i],
		   		places: []
		   	});
  		};

	    for (var i = 0; i < nameRaw.length; i++) {
	    	services.query({categoryId: nameRaw[i]}, function (result) {
	    		for (var j = 0; j < result.length; j++) {
	    			placeArray.push({
	    				name: result[j].Name,
	    				id: result[j].id,
	    				location: result[j].Location,
	    				web: result[j].Website,
	    				price_range: result[j].Price_Range,
	    				description: result[j].Description,
		    		});
	    		};

	    		$scope.places.push(placeArray);
	    		placeArray = [];

	    		for (var a = 0; a < $scope.category.length; a++) {
			    	$scope.category[a].places.push($scope.places[a]);
			    };
	    	});
	    };
  	});

    $scope.oneAtATime = true;

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
  });
