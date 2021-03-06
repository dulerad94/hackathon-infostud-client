angular

  .module("app.controller.profileuser", ['ngMaterial','ui.materialize'])

  .controller("ProfileUserController", [
    "$scope",
    "$location",
    "$window",
    '$routeParams',
    'ProfileService',
    function($scope, $location, $window,$routeParams,ProfileService) {
        $scope.chips=['zezanje','opaaa'];

        $scope.addChip=function(tag){
            $scope.chips[$scope.chips.length-1].tag=tag;
            $scope.chips[$scope.chips.length-1].show=false;
            $scope.chips.push({"tag":"",'show':true});

        };
        $scope.deleteChip=function(tag){
            for(var i=0;i<$scope.chips.length;i++){
                if($scope.chips[i].tag===tag){
                    $scope.chips.splice(i,1);
                    return;
                }
            }

        };
        $scope.submit=function () {
            $scope.user.skills=$scope.chips;
            ProfileService.submit($scope.user).then(function (res) {

            });
        };
    }
  ]);
