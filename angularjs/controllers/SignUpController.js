angular.module('app.controller.signup', [])

    .controller('SignUpController', ['$scope','$location','$window','SignUpService','$routeParams',
        function ($scope,$location,$window,SignUpService,$routeParams) {

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