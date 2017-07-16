angular.module('app.controller.jobadd2', [])

    .controller('JobAdd2Controller', ['$scope','$location','$window','JobService',
        function ($scope,$location,$window,JobService) {

            $scope.requirements=[{'name':'','show':true}];

            $scope.addRequirements=function(name){
                $scope.requirements[$scope.requirements.length-1].name=name;
                $scope.requirements[$scope.requirements.length-1].show=false;
                $scope.requirements.push({"name":"",'show':true});

            };
            $scope.deleteRequirements=function(name){
                for(var i=0;i<$scope.requirements.length;i++){
                    if($scope.requirements[i].name===name){
                        $scope.requirements.splice(i,1);
                        return;
                    }
                }

            };

            $scope.submit=function () {
                if($scope.requirements[$scope.requirements.length-1].name==="") $scope.requirements.pop();
                $scope.job.requirements=$scope.requirements;
                $window.localStorage.requirements=$scope.requirements;
                $window.location="#!/job/add-3";
            };

        }]);
