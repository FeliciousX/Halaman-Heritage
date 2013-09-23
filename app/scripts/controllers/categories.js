'use strict';
// TODO: write e2e tests
angular.module('halamanHeritageApp')
  .controller('CategoriesCtrl', function ($scope, $route) {
  	$scope.categories = $route.current.locals.categories;
    $scope.oneAtATime = true;

    $scope.filters = function(category) {
    	console.log(category);
    }
  });
