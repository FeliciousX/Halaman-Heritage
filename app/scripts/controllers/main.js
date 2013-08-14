'use strict';

angular.module('halamanHeritageApp')
  .controller('MainCtrl', function ($scope, categoryList) {
    $scope.category = categoryList.query();
    
    $scope.oneAtATime = true;
  });
