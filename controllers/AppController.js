var app = angular.module('ngApp');
app.controller('AppController',  function($scope,$http) {
	$scope.contacts = [];
	var getData = function(){
		$http({
  		method: 'GET',
		  url: '/people.json'
		}).then(function successCallback(response) {
			$scope.contacts = response.data.People;
		}, function errorCallback(response) {
	    console.log(response.status);
	  });
	}();

});