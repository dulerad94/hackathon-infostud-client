angular

  .module("app.controller.profileuser", ['ngMaterial','ui.materialize'])

  .controller("ProfileUserController", [
    "$scope",
    "$location",
    "$window",
    '$routeParams',
    function($scope, $location, $window,$routeParams) {
        $scope.chips=[{'tag':'','show':true}];

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
    }
  ]);
