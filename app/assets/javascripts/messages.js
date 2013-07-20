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
    index:  { method: 'GET', isArray: true},
    create: { method: 'POST' }
  });
})

.controller('messagesController', function($scope, Messages) {
  console.log('messagesController');
  $scope.messages = Messages.index();
})

.controller('messageFormController', function($scope, $routeParams, $location, Message, Messages) {
  console.log('messageFormController');

  if ($routeParams.id) {
    $scope.message = Message.get({ id: $routeParams.id });
  } else {
    $scope.message = {}; 
  } 

  $scope.submit = function() {
    if ($scope.message.id > 0) {
      $scope.message.$save({ id: $scope.message.id }, function(m) {
        $location.path('/messages');
      });
    } else {
      Projects.create($scope.project, function(p) {
        $location.path('/messages');
      })
    }
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

