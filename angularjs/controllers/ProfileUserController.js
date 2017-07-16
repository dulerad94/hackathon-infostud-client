angular
  .module("app.controller.profileuser", ["ngMaterial"])
  .controller("ProfileUserController", [
    "$scope",
    "$location",
    "$window",
    function($scope, $location, $window) {
      $scope.chips = [];
      $scope.states = [{ a: "aaa" }, { a: "bbbbb" }];

      $(document).ready(function() {
        $("select").material_select();
      });
      jQuery(function($) {
        $(document).ready(function() {
          $("#select").val(newValue);
          $("#select").material_select();
        });
      });
    }
  ]);
