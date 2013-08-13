'use strict';

angular.module('halamanHeritageApp')
  .controller('MapsCtrl', function ($scope) {
    $scope.myMarkers = [];
    var ll = new google.maps.LatLng(1.5305717, 110.3569404);
    $scope.mapOptions = {
      center: ll,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.addMarker = function($event) {
      $scope.myMarkers.push(new google.maps.Marker({
        map: $scope.myMap,
        position: $event.latLng
      }));
    };

    $scope.setZoomMessage = function(zoom) {
      $scope.zoomMessage = 'You just zoomed to '+zoom+'!';
    };

    $scope.openMarkerInfo = function(marker) {
      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getPosition().lat();
      $scope.currentMarkerLng = marker.getPosition().lng();
      $scope.myInfoWindow.open($scope.myMap, marker);
    };

    $scope.setMarkerPosition = function(marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
    };

    //Markers should be added after map is loaded
    $scope.onMapIdle = function() {
      if ($scope.myMarkers === undefined){
        var marker = new google.maps.Marker({
          map: $scope.myMap,
          position: ll
        });
        $scope.myMarkers = [marker, ];
      }
    };
  });
