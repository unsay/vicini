var app = angular.module('vicini', ['ngResource']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/',
      {
        controller: 'WelcomeController',
        templateUrl: '/welcome'
      })
    .when('/register',
      {
        controller: 'RegistrationController',
        templateUrl: '/profile/edit'
      })
    .when('/messages/new',
      {
        controller: 'MessagesController',
        templateUrl: 'partials/registration.html'
      })
    .otherwise({ redirectTo: '/' });
});

var controllers = {}

controllers.WelcomeController = function($scope) {
};

controllers.RegistrationController = function($scope, $http, $resource) {
};

app.controller(controllers);

angular.element(document).ready(function() {
  angular.bootstrap(document.getElementById('persona'), ['persona']);
  angular.bootstrap(document.getElementById('app'), ['vicini']);
});
