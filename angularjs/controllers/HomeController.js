angular.module('app.controller.home', [])

    .controller('HomeController', ['$scope','$location','$window','JobService','$routeParams',
        function ($scope,$location,$window,JobService,$routeParams) {

            JobService.getJobs().then(function (res) {
               if(res.data.success=="false"){
                       return;
               }
                $scope.jobList = new Array();
                var jobs = new Array();
                for (var i = 0; i < res.data.jobs.length; i++) {
                    if (i % 2 === 0 && i !== 0) {
                        $scope.jobList.push(jobs);
                        jobs = new Array();
                    }
                    jobs.push(res.data.jobs[i]);
                }
                $scope.jobList.push(jobs);
               // $scope.jobs=res.data.jobs;
               for(var i=0;i<$scope.jobList.length;i++){
                   for(var k=0;k<$scope.jobList[i].length;k++){
                       $scope.jobList[i][k].tagsString="";
                       for(var j=0;j<$scope.jobList[i][k].tags.length;j++){
                           $scope.jobList[i][k].tagsString+=$scope.jobList[i][k].tags[j].name+", ";
                       }
                       $scope.jobList[i][k].tagsString=$scope.jobList[i][k].tagsString.substring(0,$scope.jobList[i][k].tagsString.length-2);
                   }

               }
            });
        }]);
