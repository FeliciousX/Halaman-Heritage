'use strict';
// TODO: beautify page and write tests
angular.module('halamanHeritageApp')
  .controller('CategorydetailCtrl', function ($scope, $routeParams, services) {
    $scope.placeId = $routeParams.placeId;
    $scope.categoryId = $routeParams.categoryId;
    $scope.placeList = services.query({categoryId: $scope.categoryId});

  });