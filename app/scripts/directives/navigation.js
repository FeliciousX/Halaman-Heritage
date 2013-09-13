'use strict';

angular.module('halamanHeritageApp')
  .directive('navigation', function () {
    return {
    	/*template: '<h2>Navigation</h2>' +
									'<ul>' +
										'<li><a href=\'#/\'>Main</a></li>' +
										'<li><a href=\'#/categories\'>Categories</a></li>' +
										'<li><a href=\'#/maps\'>Maps</a></li>' +
									'</ul>',*/ // CHANGED: Used templateUrl instead of template
      templateUrl: 'views/templates/menu.html',
      restrict: 'E',
      controller: function ($scope) {
      }
    };
  });
