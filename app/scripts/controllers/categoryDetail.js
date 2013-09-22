'use strict';
// TODO: beautify page and write tests
angular.module('halamanHeritageApp')
	.controller('CategorydetailCtrl', function ($scope, $routeParams, services, toMaps) {
	$scope.category = $routeParams.categoryId;

    $scope.placeId = $routeParams.placeId;

    services.getDetail($scope.category, $scope.placeId)
    .then(function(result) {
        toMaps.set = true;
        toMaps.latitude = result.latitude;
        toMaps.longitude = result.longitude;
        toMaps.infoWindow = '<h3>' + result.name + '</h3><p><a href="#/category/' + $routeParams.categoryId + '/' + $routeParams.placeId + '/details">More details..</a></p>'
        toMaps.id = result.id;

        $scope.placeDetail = result;

        if ($scope.placeDetail.picture == null) { $scope.placeDetail.picture = "../img/photo_na.jpg"; }
    });
  });