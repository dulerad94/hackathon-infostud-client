angular.module('app.controller.home', [])

    .controller('HomeController', ['$scope','$location','$window','JobService','$routeParams',
        function ($scope,$location,$window,JobService,$routeParams) {

            JobService.getJobs().then(function (res) {
               if(res.data.success=="false"){
                       return;
               }
               $scope.jobs=res.data.jobs;
               for(var i=0;i<$scope.jobs.length;i++){
                   $scope.jobs[i].tagsString="";
                   for(var j=0;j<$scope.jobs[i].tags.length;j++){
                       $scope.jobs[i].tagsString+=$scope.jobs[i].tags[j].name+", ";
                   }
                   $scope.jobs[i].tagsString=$scope.jobs[i].tagsString.substring(0,$scope.jobs[i].tagsString.length-2);
               }
            });
        }]);
