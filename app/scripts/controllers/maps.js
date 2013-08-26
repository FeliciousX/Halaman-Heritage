'use strict';

angular.module('halamanHeritageApp').controller('MapsCtrl', function ($scope) {
    var ll = new google.maps.LatLng(1.5305717, 110.3569404);
    $scope.mapOptions = {
      	center: ll,
      	zoom: 15,
      	mapTypeId: google.maps.MapTypeId.ROADMAP
    }; 
});
