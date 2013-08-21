'use strict';

describe('Directive: navigation', function () {
  beforeEach(module('halamanHeritageApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile, meny) {
  	// FIXME: correct testing
    element = angular.element('<navigation class="meny"></navigation>');
    element = $compile(element)($rootScope);
    Meny.create(meny.menyInit());
    expect(element.text()).toBe('');
  }));
});
