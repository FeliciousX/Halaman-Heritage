'use strict';
// TODO: beautify page and write tests
angular.module('halamanHeritageApp')
	.controller('CategorydetailCtrl', function ($scope, $routeParams, services, toMaps) {
    $scope.placeId = $routeParams.placeId;

    $scope.placeDetail = services.getDetail($routeParams.categoryId, $routeParams.placeId);

    toMaps.set = true;
    toMaps.latitude = $scope.placeDetail.Latitude;
    toMaps.longitude = $scope.placeDetail.Longitude;
    toMaps.infoWindow = '<h3>' + $scope.placeDetail.name + '</h3><p><a href="#/category/accomodation/' + $scope.placeDetail.id + '/details">More details..</a></p>'
    toMaps.id = $scope.placeDetail.id;
  });