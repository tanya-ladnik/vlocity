var app = angular.module('ngApp');
app.component('mainpanel', {
  templateUrl: 'components/mainpanel/mainpanel.html',
  bindings: {
    contacts:'<'
  },
	controller: function($scope,$http,$routeParams) {
		var unslugify = function(text){
			return text.replace('-',' ');
		};
		$scope.range = function(n) {
      return new Array(n);
    };

    angular.forEach(this.contacts, function(value, key) {
		  if(value.name == unslugify($routeParams.slug)){
		  	$scope.data = value;
		  	$scope.data.iteration = Math.max(value.Likes.length , value.Dislikes.length);
		  }
		});

	}
});