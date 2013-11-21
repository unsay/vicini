angular.module('app.addresses', ['ngRoute'])


.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/addresses/new',
      {
        controller: 'addressFormController',
        templateUrl: '/addresses/new.ng'
      })
    .when('/addresses/:id',
      {
        controller: 'addressController',
        templateUrl: '/addresses/show.ng'
      })
    .when('/addresses/:id/edit',
      {
        controller: 'addressFormController',
        templateUrl: '/addresses/edit.ng'
      })
}])

.controller('addressController', ['$scope', '$routeParams', function($scope, $routeParams) {
  console.log('addressController');
  var id = $routeParams.id;
  $scope.address = Address.get({ id: id });
}])

.controller('addressNavController', ['$scope', '$location', function($scope, $location) {
  $scope.edit = function() {
    $location.path('/addresses/new');
  }
}])

.controller('addressFormController', ['$scope', '$routeParams', '$location', 'Restangular', function($scope, $routeParams, $location, Restangular) {
  console.log('addressesFormController');

  if ($routeParams.id) {
    $scope.address = Restangular.one('addresses', $routeParams.id).get();
  } else {
    $scope.address = {}; 
  } 

  $scope.submit = function() {
    if ($scope.address.id > 0) {
      Restangular.one('addresses', $scope.adddress.id).patch().then(function() {
        $location.path('/addresses');
      });
    } else {
      Restangular.all('addresses').post().then(function() {
        $location.path('/addresses');
      });
    }
  }  
}]);
