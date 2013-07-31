angular.module('app.messages', [])

.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/messages',
      {
        controller: 'messagesController',
        templateUrl: '/messages.ng'
      })
    .when('/messages/new',
      {
        controller: 'messagesController',
        templateUrl: '/messages/new.ng'
      })
    .when('/messages/:id',
      {
        controller: 'messagesController',
        templateUrl: '/messages/show.ng'
      })
}])

.factory('Messages', function($resource) {
  return $resource('/messages', {}, {
    create: { method: 'POST' }
  });
})

.controller('messagesController', function($scope, Messages) {
  console.log('messagesController');
})

.controller('messageFormController', function($scope, $routeParams, $location, Messages) {
  console.log('messageFormController');

  $scope.message = {}; 

  $scope.submit = function() {
    console.log('submit()');
    Messages.create($scope.message, function(m) {
      $location.path('/messages');
    })
  }  
})

.controller('messageNavController', function($scope, $location) {
  $scope.new = function() {
    $location.path('/messages/new');
  }
})

.controller('messageController', function($scope, $routeParams, Project) {
  console.log('messageController');
  var id = $routeParams.id;
  $scope.project = Project.get({ id: id });
});

