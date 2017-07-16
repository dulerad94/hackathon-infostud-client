angular.module('app.controller.job', [])

    .controller('JobController', ['$scope','$location','$window','$routeParams','JobService',
        function ($scope,$location,$window,$routeParams,JobService) {
            $scope.jobID=$routeParams.id;


        }]);