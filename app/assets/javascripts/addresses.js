angular.module('app.addresses', [])


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

.factory('Addresses', function($resource) {
  return $resource('/addresses', {}, {
    index:  { method: 'GET', isArray: true},
    create: { method: 'POST' }
  });
})

.factory('Address', function($resource) {
  return $resource('/addresses/:id', {}, {
    save: { method: 'PUT' }
  });
})

.controller('addressController', function($scope, $routeParams, Address) {
  console.log('addressController');
  var id = $routeParams.id;
  $scope.address = Address.get({ id: id });
})

.controller('addressNavController', function($scope, $location) {
  $scope.edit = function() {
    $location.path('/addresses/new');
  }
})

.controller('addressFormController', function($scope, $routeParams, $location, Address, Addresses) {
  console.log('addressesFormController');

  if ($routeParams.id) {
    $scope.address = Address.get({ id: $routeParams.id });
  } else {
    $scope.address = {}; 
  } 

  $scope.submit = function() {
    if ($scope.address.id > 0) {
      $scope.address.$save({ id: $scope.address.id }, function(m) {
        $location.path('/addresses');
      });
    } else {
      addresses.create($scope.address, function(p) {
        $location.path('/addresses');
      })
    }
  }  
});
