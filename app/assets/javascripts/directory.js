angular.module('app.directory', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/directory',
      {
        controller: 'directoryController',
        templateUrl: '/directory.ng'
      })
}])

.controller('directoryController', ['$scope', function($scope) {
}])

.controller('directoryNavController', ['$scope', '$location', function($scope, $location) {
  $scope.index = function() {
    $location.path('/directory');
  }
}]);
