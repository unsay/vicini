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

.factory('Messages', ['$resource', function($resource) {
  return $resource('/messages', {}, {
    create: { method: 'POST' }
  });
}])

.controller('messagesController', ['$scope', 'Messages', function($scope, Messages) {
  console.log('messagesController');
}])

.controller('messageFormController', ['$scope', '$routeParams', '$location', 'Messages', function($scope, $routeParams, $location, Messages) {
  console.log('messageFormController');

  $scope.message = {}; 

  $scope.submit = function() {
    console.log('submit()');
    Messages.create($scope.message, function(m) {
      $location.path('/messages');
    })
  }  
}])

.controller('messageNavController', ['$scope', '$location', function($scope, $location) {
  $scope.new = function() {
    $location.path('/messages/new');
  }
}])

.controller('messageController', ['$scope', '$routeParams', 'Project', function($scope, $routeParams, Project) {
  console.log('messageController');
  var id = $routeParams.id;
  $scope.project = Project.get({ id: id });
}]);

