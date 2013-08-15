'use strict';

angular.module('halamanHeritageApp', ['ui.bootstrap', 'ui', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/404', {
        templateUrl: 'views/404.html',
        controller: 'ErrCtrl'
      })
      .when('/maps', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl'
      })
      .when('/category/:categoryId/:placeId', { // TODO: fix category details page
        templateUrl: 'views/categoryDetail.html',
        controller: 'CategorydetailCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
