'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.foo',
  'myApp.bar'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.otherwise({redirectTo: '/foo'});
  
  $routeProvider.when('/foo', {
    templateUrl: 'foo/foo.html',
    controller: 'FooController',
    controllerAs: 'vm'
  });

  $routeProvider.when('/bar', {
    templateUrl: 'bar/bar.html',
    controller: 'BarController',
    controllerAs: 'vm'
  });  
}]);
