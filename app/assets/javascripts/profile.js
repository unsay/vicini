angular.module('app.profiles', ['ngResource'])


.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/profiles/:id',
      {
        controller: 'profileController',
        templateUrl: '/profiles/show.ng'
      })
    .when('/profiles/:id/edit',
      {
        controller: 'profileFormController',
        templateUrl: '/profiles/edit.ng'
      })
}])

.factory('Profiles', function($resource) {
  return $resource('/profiles', {}, {
    index:  { method: 'GET', isArray: true},
    create: { method: 'POST' }
  });
})

.factory('Profile', function($resource) {
  return $resource('/profiles/:id/update', {}, {
    save: { method: 'PATCH' }
  });
})

.controller('profileController', function($scope, $routeParams, Profile) {
  console.log('profileController');
  var id = $routeParams.id;
  $scope.profile = Profile.get({ id: id });
})

.controller('profileNavController', function($scope, $location) {
  $scope.edit = function() {
    $location.path('/profiles/1/edit');
  }
})

.controller('profileFormController', function($scope, $routeParams, $location, Profile, Profiles) {
  console.log('profilesFormController');

  if ($routeParams.id) {
    $scope.profile = Profile.get({ id: $routeParams.id });
  } else {
    $scope.profile = {}; 
  } 

  $scope.clap = function() {
    console.log("Happy");
  }

  $scope.submit = function() {
    console.log('submitting the profile');
    console.log($scope.profile);
    if ($scope.profile.id > 0) {
      $scope.profile.$save({ user_id: $scope.profile.id }, function(m) {
        $location.path('/profiles');
      });
    } else {
      Profiles.create($scope.profile, function(p) {
        $location.path('/profiles');
      })
    }
  }  
});
