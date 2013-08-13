'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // load the controller's module
  beforeEach(module('halamanHeritageApp'));

  var MainCtrl, $httpBackend, scope;
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('places/categories.json').
      respond([{'category':'accomodation',
        'places':
        [
        {'name':'Merdeka Palace Hotel', 'id': 'merdeka'}
      ]}]);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should create a list of categories with 2 category fetched from xhr', function () {
    expect(scope.category).toEqual({});
    $httpBackend.flush();

    expect(scope.category).toEqualData(
      [{'category': 'accomodation',
        'places':
        [
        {'name':'Merdeka Palace Hotel', 'id': 'merdeka'}
      ]}]);
  });
});
