'use strict';

describe('foo module', function() {

  beforeEach(module('myApp.foo'));

  describe('foo controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var fooController = $controller('FooController');
      expect(fooController).toBeDefined();
    }));

  });
});