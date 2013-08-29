'use strict';
// TODO: beautify page and write tests
angular.module('halamanHeritageApp')
	.controller('CategorydetailCtrl', function ($scope, $routeParams, services) {
    $scope.placeId = $routeParams.placeId;

    $scope.placeList = services.query({categoryId: $routeParams.categoryId});
  });