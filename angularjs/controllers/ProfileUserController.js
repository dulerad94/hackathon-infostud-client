angular
  .module("app.controller.profileuser", ['ui.materialize'])
  .controller("ProfileUserController", [
    "$scope",
    "$location",
    "$window",
    function($scope, $location, $window) {
      $scope.chips = [{
        tag: 'Apple',
    }, {
        tag: 'Microsoft',
    },{
        tag: 'Google',
    }];

    }
  ]);
