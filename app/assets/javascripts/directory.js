angular.module('app.directory', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/directory',
      {
        controller: 'directoryController',
        templateUrl: '/directory.ng'
      })
}])

.controller('directoryController', function($scope) {
})

.controller('directoryNavController', function($scope, $location) {
  $scope.index = function() {
    $location.path('/directory');
  }
});
