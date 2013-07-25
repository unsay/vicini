angular.module('app.users', ['ngResource'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/user/:id',
      {
        controller: 'userController',
        templateUrl: '/users/show.ng'
      })
    .when('/user/:id/edit',
      {
        controller: 'userController',
        templateUrl: '/users/edit.ng'
      })
}])

.factory('Users', function($resource) {
  return $resource('/users', {}, {
    index:  { method: 'GET', isArray: true},
    create: { method: 'POST' }
  });
})

.factory('User', function($resource) {
  return $resource('/users/:id/update', {}, {
    save: { method: 'PATCH' }
  });
})

.controller('userController', function($scope, $routeParams, user) {
  console.log('userController');
  var id = $routeParams.id;
  $scope.user = user.get({ id: id });
  console.log($scope.user);
})

.controller('userNavController', function($scope, $location) {
  $scope.edit = function() {
    console.log('userNavController#edit');
    // Angular style redirect
    $location.path('/users/1/edit');
  }
})

.controller('userFormController', function($scope, $routeParams, $location, user, users) {
  console.log('usersFormController');

  if ($routeParams.id) {
    $scope.user = user.get({ id: $routeParams.id });
  } else {
    $scope.user = {}; 
  } 

  $scope.clap = function() {
    console.log("Happy");
  }

  $scope.submit = function() {
    console.log('submitting the user');
    console.log($scope.user);
    if ($scope.user.id > 0) {
      $scope.user.$save({ id: $scope.user.id }, function(m) {
        $location.path('/users');
      });
    } else {
      users.create($scope.user, function(p) {
        $location.path('/users');
      })
    }
  }  
});
