angular.module('app.controller.job', [])

    .controller('JobController', ['$scope','$location','$window','$routeParams','JobService','ProfileService',
        function ($scope,$location,$window,$routeParams,JobService,ProfileService) {
            $scope.jobID=$routeParams.id;
            $scope.company=($window.sessionStorage.type==="company");

            JobService.getJob($scope.jobID).then(function (res) {
                $scope.job=res.data.job;
                ProfileService.getCompanyPictures($scope.job.company_id).then(function (res) {
                    $scope.job.company.images=res.data.images;
                });
            });
            JobService.getBestUsersForAd($scope.jobID).then(function (res) {
                $scope.users=res.data.users;
            });

            $scope.contact=function (userID) {
              JobService.contactUser(userID,$scope.jobID).then(function () {

              });
            };
        }]);