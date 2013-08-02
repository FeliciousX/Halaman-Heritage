'use strict';

describe('Controller: MapsCtrl', function () {

  // load the controller's module
  beforeEach(module('halamanHeritageApp'));

  var MapsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapsCtrl = $controller('MapsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    
  });
});
