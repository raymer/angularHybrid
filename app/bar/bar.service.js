'use strict';

angular
  .module('myApp')
  .service('barService', barService);

function barService($q) {
  this.getData = function() {
    return $q.when({ data: { message: 'hello world!' } });
  };
}