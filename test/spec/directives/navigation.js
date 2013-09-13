'use strict';

describe('Directive: navigation', function () {
  beforeEach(module('halamanHeritageApp'));
  
   var element, scope, httpBackend, compile;

   beforeEach(inject(function ($rootScope, $compile, $httpBackend) {
   		scope = $rootScope;
   		httpBackend = $httpBackend;
   		compile = $compile;

	  	httpBackend.expectGET('views/templates/menu.html').respond(200, {});
   }));

   afterEach(function() {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
   });

   var compileNavigation = function (markup, scope) {
      var el = compile(markup)(scope);
      httpBackend.flush();
      scope.$digest();
      return el;
    };


  it('should make navigation appear', inject(function ($rootScope, $compile, $httpBackend) {
  	// FIXME: correct testing
    var el = compileNavigation('<navigation></navigation>', scope);
    var content = compileNavigation('<div class="container-fluid>abc</div>', scope);
    expect(el).not.toHaveClass('meny');
	  httpBackend.flush();
  }));
});
