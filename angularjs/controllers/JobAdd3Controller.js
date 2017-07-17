angular.module('app.controller.jobadd3', [])

    .controller('JobAdd3Controller', ['$scope','$location','$window','JobService',
        function ($scope,$location,$window,JobService) {
            $scope.job={
              "age":""+$window.localStorage.age,
              "pay":""+$window.localStorage.pay,
              "sex":""+$window.localStorage.sex,
              "tag":""+$window.localStorage.tag,
              "requirements":""+$window.localStorage.requirements
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

                if($scope.offers[$scope.offers.length-1].name==="") $scope.offers.pop();


                var offers="";
                if($scope.offers!="undefined"){
                    for(var i=0;i<$scope.offers.length-1;i++){
                        offers+=$scope.offers[i].name+";";
                    }
                    if($scope.offers.length>0){
                        offers+=$scope.offers[$scope.offers.length-1].name;
                    }
                    $scope.job.what_we_offer=""+offers;
                }

                $scope.job.companyID=""+$window.sessionStorage.companyID;
                JobService.postJob($scope.job).then(function (res) {
                    $window.location="#!/job/"+res.data.ad;
                });
            };

        }]);
