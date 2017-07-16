angular.module('app.controller.login', [])

    .controller('LoginController', ['$scope','$location','$window','LoginService','$routeParams',
        function ($scope,$location,$window,LoginService,$routeParams) {
            $scope.error="hide";
            $scope.submit=function () {
                if($routeParams.type==="user"){
                    LoginService.loginUser($scope.username,$scope.password).then(function (res) {
                        if(res.data.success=="false") {
                            $scope.error="show";
                            return;
                        }
                        $window.sessionStorage.clear();
                        $window.sessionStorage.userID=res.data.user.user_id;
                        $window.location="#!/home/1";
                    });
                }
                else {
                    LoginService.loginCompany($scope.username,$scope.password).then(function (res) {
                        if(res.data.success=="false") {
                            $scope.error="show";
                            return;
                        }
                        $window.sessionStorage.clear();
                        $window.sessionStorage.companyID=res.data.user.company_id;
                        $window.location="#!/home/1";
                    });
                }
            }
        }]);