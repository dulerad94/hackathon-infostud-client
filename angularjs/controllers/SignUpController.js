angular.module('app.controller.signup', [])

    .controller('SignUpController', ['$scope','$location','$window','SignUpService','$routeParams',
        function ($scope,$location,$window,SignUpService,$routeParams) {
            $scope.error=false;
            $scope.submit=function () {
                if($routeParams.type==="user"){
                    SignUpService.signUpUser($scope.username,$scope.password).then(function (res) {
                        if(res.data.success!=="true") {
                            $scope.error=true;
                            return;
                        }
                    });
                }
                else {
                    SignUpService.signUpCompany($scope.username,$scope.password).then(function (res) {
                        if(res.data.success!=="true") return;
                    });
                }
            }

        }]);