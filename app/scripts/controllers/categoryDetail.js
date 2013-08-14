'use strict';

angular.module('halamanHeritageApp')
  .controller('CategorydetailCtrl', function ($scope, $routeParams, categoryList) {
    $scope.placeId = $routeParams.placeId;
    $scope.categoryId = $routeParams.categoryId;
    $scope.placeList = categoryList.query({categoryId: $scope.categoryId});

    $scope.placeList = categoryList.query({categoryId: $routeParams.categoryId});

  });