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
      .when('/category/:categoryId/:placeId/details', {
        templateUrl: 'views/categoryDetail.html',
        controller: 'CategorydetailCtrl'
      }).when('/categories', { // CHANGED: from main to categories
        templateUrl: 'views/Categories.html',
        controller: 'CategoriesCtrl'
      })
      .otherwise({
        redirectTo: '/404'
      });
  });
