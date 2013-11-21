angular.module('app.users', ['restangular', 'persona'])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/users/:id',
      {
        controller: 'userController',
        templateUrl: '/users/show.ng'
      })
    .when('/user/create-account',
      {
        controller: 'userNavController',
        template: "<br><h1>Please login into Mozilla Persona to begin editing profile.</h1>"
      })
    .when('/user/no-profile',
      {
        controller: 'userNavController',
        template: "<br><h1>The user doesn't exist.</h1>"
      })
    .when('/users/:id/edit',
      {
        controller: 'userFormController',
        templateUrl: '/users/edit.ng'
      })
}])

.controller('userNavController', ['$scope', '$location', 'personaSvc', function($scope, $location, personaSvc) {
  $scope.edit = function() {
    console.log('userNavController#edit');
    personaSvc.status().then( function(data) {
      if(data.id) {
        $location.path('/users/' + data.id + '/edit');
      } else {
        $location.path('/user/create-account');
      }
    });
  }
}])

.controller('userController', ['$scope', '$routeParams', '$location', 'Restangular',  function($scope, $routeParams, $location, Restangular) {
  console.log('userController');

  $scope.user = {}; 
  if ($routeParams.id) {
    $scope.user = Restangular.one('users', $routeParams.id).get().then( function successCallback(restData) {
      $scope.user = restData;
    }, function errorCallback() {
      $location.path('/user/no-profile');
    });
  } else {
    $location.path('/user/no-profile');
  }
}])

.controller('userFormController', ['$scope', '$routeParams', '$location', 'Restangular', function($scope, $routeParams, $location, Restangular) {
  console.log('usersFormController');

  if ($routeParams.id) {
    $scope.user = Restangular.one('users', $routeParams.id).get().then( function(restData) {
      $scope.user = restData;
    });
  } else {
    $scope.user = {}; 
  } 
  $scope.update = function() {
    console.log('userNavController#update');
    $scope.user.patch().then( function(data) {
      // Redirect to the user view page
      $location.path('/users/' + $scope.user.id);
    });
  }  
}]);
