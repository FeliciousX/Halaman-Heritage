'use strict';

describe('Service: toMaps', function () {

  // load the service's module
  beforeEach(module('halamanHeritageApp'));

  // instantiate service
  var toMaps;
  beforeEach(inject(function (_toMaps_) {
    toMaps = _toMaps_;
  }));

  it('should do something', function () {
    expect(!!toMaps).toBe(true);
  });

});
