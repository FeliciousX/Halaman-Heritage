'use strict';

describe('Controller: CategorydetailCtrl', function () {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  // load the controller's module
  beforeEach(module('halamanHeritageApp'));

  var CategorydetailCtrl, $httpBackend, scope;
  var abcPlaceData = function() {
    return [{
        'id':1,
        'name':' Merdeka Palace Hotel',
        'opening_hours': '',
        'lat':' 110.343986',
        'lng':'',
        'location':' Jalan Tun Abang Haji Openg, P.O. Box A298, Kuching 93000, Malaysia',
        'price_range': ' RM179 - 414',
        'description': ' Hotel Class: 3.5 star',
        'web': ''
      }];
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, $routeParams) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('places/accomodation.json').
      respond(abcPlaceData());

    $routeParams.categoryId = 'accomodation';

    scope = $rootScope.$new();
    CategorydetailCtrl = $controller('CategorydetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.placeList).toEqualData([]);
    $httpBackend.flush();

    expect(scope.placeList).toEqualData(abcPlaceData());
  });
});
