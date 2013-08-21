'use strict';
// TODO: clean data and write e2e tests
angular.module('halamanHeritageApp')
  .controller('MainCtrl', function ($scope, services, meny) {
    $scope.category = services.query();
    
    $scope.oneAtATime = true;

    var meny = Meny.create(meny.menyInit());
  });
