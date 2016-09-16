
angular.module('ngApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider.otherwise("/");
  
  $routeProvider.when('/contacts/:slug', {
      template: '<mainpanel contacts="contacts"></mainpanel>'
  })
});
