var app = angular.module('ngApp');
app.component('sidebar', {
  templateUrl: 'components/sidebar/sidebar.html',
  bindings: {
    search: '<',
    contacts:'<'
  },
	controller: function($scope) {
		$scope.slugify = function(text){
			return text.replace(' ','-');
		};
	}
});