angular.module('app.controller.jobadd', [])

    .controller('JobAddController', ['$scope','$location','$window','JobService',
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
            $scope.offers=[{'name':'','show':true}];

            $scope.addOffer=function(name){
                $scope.offers[$scope.offers.length-1].name=name;
                $scope.offers[$scope.offers.length-1].show=false;
                $scope.offers.push({"name":"",'show':true});

            };
            $scope.deleteOffer=function(name){
                for(var i=0;i<$scope.offers.length;i++){
                    if($scope.offers[i].name===name){
                        $scope.offers.splice(i,1);
                        return;
                    }
                }

            };

            $scope.submit=function () {
                JobService.submit($scope.job).then(function (res) {

                });
            };

        }]);
