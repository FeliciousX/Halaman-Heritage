'use strict';
// TODO: write e2e tests
angular.module('halamanHeritageApp')
  .controller('CategoriesCtrl', function ($scope, services, persistFilter) {
  	$scope.categories = services.getData();
    $scope.oneAtATime = true;
    $scope.filterInit = persistFilter;
  });
