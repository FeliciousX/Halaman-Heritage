'use strict';

angular.module('halamanHeritageApp').controller('MapsCtrl', function ($scope, services, toMaps) {

  $scope.center = { // by default, centers to Swinburne.
    // TODO: Centers to Plaza Merdeka by default
    latitude: 1.532528,
    longitude: 110.358052,
  };

  $scope.markers = [];
  $scope.windows = [];

  $scope.markClick = true;
  $scope.zoom = 15;
  $scope.fit = true;

  services.getMarkers().then(function(result) {
    $scope.markers = result;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        if(toMaps.set) {
          toMaps.set = false;
          console.log(toMaps.latitude);
          console.log(toMaps.longitude);
          $scope.zoom = 17;
          $scope.center = {
            latitude: toMaps.latitude,
            longitude: toMaps.longitude
          };
        }
        else {
          $scope.center = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
        }

        $scope.markers.push({ // adding marker on ur current location
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          infoWindow: 'You are here!'
        });

        $scope.$apply();
      }, function () {

      });
    };
  });

});
