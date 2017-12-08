angular.module('app').controller('mvNavBarLoginCtrl', function ($scope, $http, mvNotifier, mvIdentity, mvAuth) {
  $scope.identity = mvIdentity;
  $scope.signin = function (username, password) {
    mvAuth.authenticateUser(username, password).then(function (success) {
      if (success) {
        mvNotifier.notify('Logged in successfully');
      } else {
        mvNotifier.notify('Failed to log in!');
      }
    });
  }
});