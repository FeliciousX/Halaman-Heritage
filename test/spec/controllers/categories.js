'use strict';

describe('Controller: CategoriesCtrl', function () {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // load the controller's module
  beforeEach(module('halamanHeritageApp'));

  var CategoriesCtrl, $httpBackend, scope;
  
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
    CategoriesCtrl = $controller('CategoriesCtrl', {
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
