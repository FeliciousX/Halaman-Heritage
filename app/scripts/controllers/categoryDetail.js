'use strict';

angular.module('halamanHeritageApp')
  .controller('CategorydetailCtrl', function ($scope, $routeParams, categoryList) {
    $scope.placeId = $routeParams.placeId;

    $scope.placeList = categoryList.query({categoryId: $routeParams.categoryId});

  });