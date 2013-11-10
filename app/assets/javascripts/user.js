angular.module('app.users', ['ngResource', 'persona'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/users/:id',
      {
        controller: 'userController',
        templateUrl: '/users/show.ng'
      })
    .when('/user/create-account',
      {
        controller: 'userFormController',
        template: '<h1>Please login into Mozilla Persona to begin editing profile.</h1>'
      })
    .when('/users/:id/edit',
      {
        controller: 'userFormController',
        templateUrl: '/users/edit.ng'
      })
}])

.factory('Users', function($resource) {
  return $resource('/users', {}, {
    query:  { method: 'GET', isArray: true},
    create: { method: 'POST' }
  });
})

.factory('User', function($resource) {
  return $resource('/users/:id', {}, {
    save: { method: 'PATCH' }
  });
})

.controller('userNavController', function($scope, $location, personaSvc) {
  $scope.edit = function() {
    console.log('userNavController#edit');
    personaSvc.status().then( function(data) {
      console.log(data);
      if(data.id) {
        // Angular style redirect
        $location.path('/users/' + data.id + '/edit');
      } else {
        $location.path('/user/create-account');
      }
    });
  }
})

.controller('userController', function($scope, $routeParams, User, Users) {
  console.log('userController');
  if ($routeParams.id) {
    $scope.user = User.get({ id: $routeParams.id });
  } else {
    $scope.user = {}; 
    $scope.users = Users.query( function() {
      console.log($scope.users);
    });
  } 
})

.controller('userFormController', function($scope, $routeParams, $location, User, Users) {
  console.log('usersFormController');

  if ($routeParams.id) {
    $scope.user = User.get({ id: $routeParams.id });
  } else {
    $scope.user = {}; 
  } 

  $scope.update = function() {
    console.log('submitting the user');
    console.log($scope.user);
    $scope.user.$save({ id: $scope.user.id });
  }  
});
