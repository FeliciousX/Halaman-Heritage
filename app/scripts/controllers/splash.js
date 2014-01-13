'use strict';

angular.module('halamanHeritageApp')
  .controller('SplashCtrl', ['$scope', function ($scope) {
  	$scope.links = {
  		categories: '#/categories',
  		maps: '#/maps'
  	}
  }]);
