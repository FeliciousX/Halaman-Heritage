'use strict';

angular.module('halamanHeritageApp').controller('MapsCtrl', function ($scope, $routeParams, services, toMaps) {

  $scope.lat = $routeParams.lat;
  $scope.lng = $routeParams.lng;

  $scope.center = { // by default, centers to Plaza Merdeka
    latitude: 1.55829,
    longitude: 110.343938,
  };

  $scope.markers = [];
  $scope.windows = [];

  $scope.markClick = true;
  $scope.zoom = 15;
  $scope.fit = true;

  var marker = [];

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
          infoWindow: 'You are here!',
          icon: 'img/markers/you.png'
        });

        if($scope.lat != null && $scope.lng != null) {
          $scope.directions = {
            originLat: position.coords.latitude,
            originLng: position.coords.longitude,
            destLat: $scope.lat,
            destLng: $scope.lng,
            destination: new google.maps.LatLng($scope.lat, $scope.lng),
          };
        }

        $scope.$apply();
      }, function () {
        alert("Please enable GPS and share location to fully utilize this web application");
      });
    };

  services.getMarkers().then(function(result) {
    $scope.markers = result;
  });


});
