'use strict';

angular.module('halamanHeritageApp', ['ui.bootstrap', 'ui', 'ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/splash.html',
        controller: 'SplashCtrl'
      })
      .when('/404', {
        templateUrl: 'views/404.html',
        controller: 'ErrCtrl'
      })
      .when('/maps', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl'
      })
      .when('/category/:categoryId/:placeId/details', { // TODO: fix category details page
        templateUrl: 'views/categoryDetail.html',
        controller: 'CategorydetailCtrl'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
