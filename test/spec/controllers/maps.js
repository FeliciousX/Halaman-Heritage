'use strict';

describe('Controller: MapsCtrl', function () {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // load the controller's module
  beforeEach(module('halamanHeritageApp'));

  var MapsCtrl, $httpBackend,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('places/accomodation.json').
      respond([{'name':'Plaza Merdeka'}]);

    scope = $rootScope.$new();
    MapsCtrl = $controller('MapsCtrl', {
      $scope: scope
    });
  }));

  it('should get accomodation list', function () {
    // TODO: Refine test for maps
    expect(scope.category).toEqual({});
    $httpBackend.flush();

    expect(scope.category).toEqualData([{'name': 'Plaza Merdeka'}]);
  });
});
