/* Persona Express AngularJS module
 * ------------------------------------------------------------------
 * This is glue for the following:
 * Node             http://nodejs.org
 * Express          http://expressjs.com/
 * AngularJS        http://angularjs.org
 * Mozilla Persona  http://www.mozilla.org/en-US/persona/
 * express-persona  http://jbuck.github.com/express-persona/

 * This program is free software. It comes without any warranty, to
 * the extent permitted by applicable law. You can redistribute it
 * and/or modify it under the terms of the Do What The F*** You Want
 * To Public License, Version 2, as published by Sam Hocevar. See
 * http://sam.zoy.org/wtfpl/COPYING for more details.

 * Please don't sue: Barnabas Kendall (barnabas.kendall@gmail.com)
 *
 * This library assumes express-persona default routes,
 * persona/verify and persona/logout.
 * In addition to these, your app should expose another route:
 * persona/status, which should return
 *      {email: "me@example.com"}
 * if verified or
 *      {email: false}
 * if not verified.
  */

angular.module('persona', []);

angular.module("persona").factory("personaSvc", ["$http", "$q", function($http, $q) {

  return {
    verify: function() {
      var deferred = $q.defer();
      navigator.id.get(function(assertion) {
        $http.post("/auth/persona/callback?format=json", {
          assertion: assertion
        }).then(function(response) {
          if (response.data.status != "okay") {
            deferred.reject(response.data.reason);
          } else {
            deferred.resolve(response.data.email);
          }
        });
      });
      return deferred.promise;
    },
    logout: function() {
      return $http.post("/logout.json").then(function(response) {
        if (response.data.status != "okay") {
          $q.reject(response.data.reason);
        }
        return response.data.email;
      });
    },
    status: function() {
      return $http.post("/auth/status.json").then(function(response) {
        return response.data;
      });
    }
  };
}]);

// Persona controller; exposes login and logout methods, set state for UI
function PersonaCtrl($scope, personaSvc) {
  // initialize properties
  angular.extend($scope, {
    verified: false,
    error: false,
    email: ""
  });

  $scope.verify = function() {
    personaSvc.verify().then(function(email) {
      angular.extend($scope, {
        verified: true,
        error: false,
        email: email
      });
      $scope.status();
    }, function(err) {
      angular.extend($scope, {
        verified: false,
        error: err
      });
    });
  };

  $scope.logout = function() {
    personaSvc.logout().then(function() {
      angular.extend($scope, {
        verified: false,
        error: false
      });
    }, function(err) {
      $scope.error = err;
    });
  };

  $scope.status = function() {
    personaSvc.status().then(function(data) {
      // in addition to email, everything else returned by persona/status will be added to the scope
      // this could be the chance to expose data from your local DB, for example
      angular.extend($scope, data, {
        error: false,
        verified: !! data.email,
        email: data.email
      });
    }, function(err) {
      $scope.error = err;
    });
  };

  // setup; check status once on init
  $scope.status();
}
PersonaCtrl.$inject = ["$scope", "personaSvc"];
