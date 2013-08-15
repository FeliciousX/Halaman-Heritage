'use strict';
// TODO: clean data and write e2e tests
angular.module('halamanHeritageApp')
  .controller('MainCtrl', function ($scope, services) {
    $scope.category = services.query();
    
    $scope.oneAtATime = true;
  });
