angular.module('app.controller.login', [])

    .controller('LoginController', ['$scope','$location','$window','LoginService','$routeParams',
        function ($scope,$location,$window,LoginService,$routeParams) {


            $scope.submit=function () {
                if($routeParams.type="user"){
                    LoginService.userLogin($scope.username,$scope.password).then(function (res) {

                    });
                }
                else {
                    LoginService.userCompany($scope.username,$scope.password).then(function (res) {

                    });
                }
            }

        }]);