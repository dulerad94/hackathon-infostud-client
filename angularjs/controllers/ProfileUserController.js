angular

  .module("app.controller.profileuser", [])

  .controller("ProfileUserController", [
    "$scope",
    "$location",
    "$window",
    function($scope, $location, $window) {

      $scope.submit=function () {
        console.log($scope.user);
      };

    }
  ]);
