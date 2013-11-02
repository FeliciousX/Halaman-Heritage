'use strict';

describe('Service: persistFilter', function () {

  // load the service's module
  beforeEach(module('halamanHeritageApp'));

  // instantiate service
  var persistFilter;
  beforeEach(inject(function (_persistFilter_) {
    persistFilter = _persistFilter_;
  }));

  it('should do something', function () {
    expect(!!persistFilter).toBe(true);
  });

});
