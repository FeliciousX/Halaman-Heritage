'use strict';

angular.module('halamanHeritageApp')
  .controller('CategorydetailCtrl', function ($scope, $routeParams, services, meny) {
    $scope.placeId = $routeParams.placeId;

    $scope.placeList = services.query({categoryId: $routeParams.categoryId});

    var meny = Meny.create(meny.menyInit());
  });