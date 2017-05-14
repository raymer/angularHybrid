'use strict';

angular
  .module('myApp.foo', [])
  .controller('FooController', fooController);

fooController.$inject = [];

function fooController() {
  var vm = this;
  vm.title = 'foo';
}