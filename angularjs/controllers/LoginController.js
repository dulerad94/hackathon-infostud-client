angular.module('app.controller.login', [])

    .controller('LoginController', ['$scope','$location','$window','LoginService','$routeParams',
        function ($scope,$location,$window,LoginService,$routeParams) {


            $scope.submit=function () {
                if($routeParams.type="user"){
                    LoginService.loginUser($scope.username,$scope.password).then(function (res) {
                        if(res.data.success!=="true") return;
                        $window.sessionStorage.userID=res.data.user.user_id;
                        location.path="#!/home/1";
                    });
                }
                else {
                    LoginService.loginCompany($scope.username,$scope.password).then(function (res) {

                    });
                }
            }

        }]);