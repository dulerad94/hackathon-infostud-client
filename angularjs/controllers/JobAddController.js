angular.module('app.controller.jobadd', [])

    .controller('JobAddController', ['$scope','$location','$window','JobService',
        function ($scope,$location,$window,JobService) {


            $scope.submit=function () {
                JobService.submit($scope.job).then(function (res) {

                });
            };

        }]);
