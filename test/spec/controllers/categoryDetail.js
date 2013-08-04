'use strict';

describe('Controller: CategorydetailCtrl', function () {

  // load the controller's module
  beforeEach(module('halamanHeritageApp'));

  var CategorydetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategorydetailCtrl = $controller('CategorydetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
