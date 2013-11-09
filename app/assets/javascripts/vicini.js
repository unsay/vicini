var app = angular.module('vicini',
  [
    'app.directory',
    'app.messages',
    'app.users',
    'app.profiles'
  ]
);

app.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $httpProvider.defaults.headers.patch = { 'Content-Type': 'application/json;charset=utf-8' }
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = angular.element( document.querySelectorAll('meta[name=csrf-token]') ).attr('content');
  $routeProvider
    .otherwise({ redirectTo: '/' });
}]);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById('persona'), ['persona']);
  angular.bootstrap(document.getElementById('app'), ['vicini']);
});
