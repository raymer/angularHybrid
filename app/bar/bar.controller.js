'use strict';

angular
  .module('myApp.bar', [])
  .controller('BarController', barController);

barController.$inject = ['barService'];

function barController(barService) {
  var vm = this;
  vm.title = 'bar';

  activate();

  function activate() {
    barService.getData().then(function(result) {
      vm.message = result.data.message;
    });
  }
}