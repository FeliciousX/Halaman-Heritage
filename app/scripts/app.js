'use strict';

angular.module('halamanHeritageApp', ['shoppinpal.mobile-menu', 'ui.bootstrap', 'ui', 'ngResource', 'google-maps'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/splash.html',
        controller: 'SplashCtrl',
        resolve: {
            'services': function(services){
              return services.promise;
              // CHANGED: data is preloaded at splash screen
            }
          }
      })
      .when('/404', {
        templateUrl: 'views/404.html',
        controller: 'ErrCtrl'
      })
      .when('/maps', { // TODO: resolves data if refreshed by redirecting to splash screen
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl',
      })
      .when('/maps/:lat/:lng/navigate', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl'
      })
      .when('/category/:categoryId/:placeId/details', {
        templateUrl: 'views/categoryDetail.html',
        controller: 'CategorydetailCtrl'
      }).when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .otherwise({
        templateUrl: 'views/404.html',
        controller: 'ErrCtrl'
      });
  }]);