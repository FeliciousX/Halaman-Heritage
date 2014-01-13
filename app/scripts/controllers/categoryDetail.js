'use strict';
// TODO: beautify page and write tests
angular.module('halamanHeritageApp')
    .controller('CategorydetailCtrl', ['$scope', '$routeParams', 'services', 'toMaps', function ($scope, $routeParams, services, toMaps) {
    $scope.category = $routeParams.categoryId;

    $scope.placeId = $routeParams.placeId;
    $scope.placeDetail = services.getDetail($scope.category, $scope.placeId);

    if ($scope.placeDetail != null) {
        toMaps.set = true;
        toMaps.latitude = $scope.placeDetail.latitude;
        toMaps.longitude = $scope.placeDetail.longitude;
        toMaps.infoWindow = '<h3>' + $scope.placeDetail.name + '</h3><p><a href="#/category/' + $routeParams.categoryId + '/' + $routeParams.placeId + '/details">More details..</a></p>'
        toMaps.id = $scope.placeDetail.id;
    };

    if ($scope.placeDetail.picture == null) { $scope.placeDetail.picture = "../img/photo_na.jpg"; }
  }]);