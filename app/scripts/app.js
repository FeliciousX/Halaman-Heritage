'use strict';

angular.module('halamanHeritageApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/404', {
        templateUrl 'views/404.html',
        controller: 'ErrCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
