var app = angular.module('vicini',
  [
    'app.directory',
    'app.messages',
    'app.addresses',
    'restangular',
    'ngResource'
  ]
);

app.config(
  [
    '$routeProvider',
    '$httpProvider',
    'RestangularProvider',
    function($routeProvider, $httpProvider, RestangularProvider) {
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = angular.element(document.querySelectorAll('meta[name=csrf-token]')).attr('content');
      RestangularProvider.setRequestSuffix('.json');
      $routeProvider.otherwise({ redirectTo: '/' });
    }
  ]
);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById('persona'), ['persona']);
  angular.bootstrap(document.getElementById('app'), ['vicini']);
});
