'use strict';

angular.module('halamanHeritageApp', ['shoppinpal.mobile-menu', 'ui.bootstrap', 'ui', 'ngResource', 'google-maps'])
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
      .when('/maps', { // TODO: resolves markers before loading
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl',
        resolve: {
          markers: services.getMarkers
        }
      })
      .when('/maps/:lat/:lng/navigate', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl',
        resolve: {
          markers: services.getMarkers
        }
      })
      .when('/category/:categoryId/:placeId/details', {
        templateUrl: 'views/categoryDetail.html',
        controller: 'CategorydetailCtrl'
      }).when('/categories', { // TODO: resolves data before loading
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl',
        resolve: {
          categories: services.getData
        }
      })
      .otherwise({
        templateUrl: 'views/404.html',
        controller: 'ErrCtrl'
      });
  });
