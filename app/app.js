'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.foo'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {  

  $routeProvider.when('/foo', {
    templateUrl: 'app/foo/foo.html',
    controller: 'FooController',
    controllerAs: 'vm'
  }); 
}]);
