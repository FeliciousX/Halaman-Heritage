'use strict';
// TODO: write e2e tests
angular.module('halamanHeritageApp')
  .controller('CategoriesCtrl', function ($scope, services, persistFilter) {
  	var data = services.getData();

  	$scope.categories = data.categories;
    $scope.oneAtATime = true;
    $scope.filterInit = persistFilter;
  });
