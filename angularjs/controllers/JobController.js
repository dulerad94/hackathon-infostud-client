angular.module('app.controller.job', [])

    .controller('JobController', ['$scope','$location','$window','$routeParams',
        function ($scope,$location,$window,$routeParams) {
            $scope.jobID=$routeParams.id;

        }]);