'use strict';
// TODO: write e2e tests
angular.module('halamanHeritageApp')
  .controller('CategoriesCtrl', function ($scope, services) {
  	$scope.categories = services.getData();
    $scope.oneAtATime = true;
  });
