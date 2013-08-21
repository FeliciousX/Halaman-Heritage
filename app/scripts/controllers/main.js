'use strict';

angular.module('halamanHeritageApp')
  .controller('MainCtrl', function ($scope, categoryList, meny) {
    $scope.category = categoryList.query();
    
    $scope.oneAtATime = true;

    $scope.linkClass = 'btn btn-large';

    var meny = Meny.create(meny.menyInit());
  });
