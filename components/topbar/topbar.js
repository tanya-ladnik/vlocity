var app = angular.module('ngApp');
app.component('topbar', {
  templateUrl: 'components/topbar/topbar.html',
  bindings: {
    search: '='
  }
});