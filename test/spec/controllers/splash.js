'use strict';

describe('Controller: SplashCtrl', function () {

  // load the controller's module
  beforeEach(module('halamanHeritageApp'));

  var SplashCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SplashCtrl = $controller('SplashCtrl', {
      $scope: scope
    });
  }));

  it('should link to the proper links', function () {
    expect(scope.links.categories).toBe('#/categories');
    expect(scope.links.maps).toBe('#/maps');
  });
});
