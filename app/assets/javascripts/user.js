angular.module('app.users', ['ngResource'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/users/:id',
      {
        controller: 'userController',
        templateUrl: '/users/show.ng'
      })
    .when('/users/:id/edit',
      {
        controller: 'userFormController',
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
  return $resource('/users/:id', {}, {
    save: { method: 'PATCH' }
  });
})

.controller('userController', function($scope, $routeParams, User) {
  console.log('userController');
  var id = $routeParams.id;
  console.log(id);
  $scope.user = User.get({ id: id });
  console.log($scope.user.id);
  console.log($scope.user.last_name);
  console.log($scope.user);
})

.controller('userNavController', function($scope, $location) {
  $scope.edit = function() {
    console.log('userNavController#edit');
    // Angular style redirect
    $location.path('/users/2/edit');
  }
})

.controller('userFormController', function($scope, $routeParams, $location, User, Users) {
  console.log('usersFormController');

  if ($routeParams.id) {
    $scope.user = User.get({ id: $routeParams.id });
  } else {
    $scope.user = {}; 
  } 

  console.log($scope.user);

  $scope.clap = function() {
    console.log("Happy");
  }

  $scope.submit = function() {
    console.log('submitting the user');
    console.log($scope.user);
    // if ($scope.user.id > 0) {
    //   $scope.user.$save({ id: $scope.user.id }, function(m) {
    //     $location.path('/users/' + $scope.user.id);
    //   });
    // } else {
    Users.create($scope.user, function(userData) {
      console.log("Received success promist");
      console.log(userData);
      $location.path('/users/' + userData.id);
    })
    // }
  }  
});
