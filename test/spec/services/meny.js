'use strict';

describe('Service: meny', function () {

  // load the service's module
  beforeEach(module('halamanHeritageApp'));

  // instantiate service
  var meny;
  beforeEach(inject(function (_meny_) {
    meny = _meny_;
  }));

  it('should do something', function () {
    expect(!!meny).toBe(true);
  });

});
