'use strict';

angular.module('halamanHeritageApp').controller('MapsCtrl', function ($scope, services) {
  $scope.category = services.query({categoryId: 'accomodation'});

  for (var prop in $scope.category) {
    if (result.hasOwnProperty(prop)) {
      console.log($scope.category[prop]);
    };
  };

  $scope.markers = [];
  $scope.center = {
    latitude: 1.532528,
    longitude: 110.358052,
  };

  $scope.markClick = true;
  $scope.zoom = 15;
  $scope.fit = true;

  $scope.markers.push({
    latitude: 1.532528,
    longitude: 110.358052,
  });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

      $scope.center = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };

      $scope.markers.push({ // adding marker on ur current location for fun
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });

      $scope.$apply();
    }, function () {

    });
  };

});
