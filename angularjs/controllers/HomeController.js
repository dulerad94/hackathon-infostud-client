angular.module('app.controller.home', [])

    .controller('HomeController', ['$scope','$location','$window','JobService','$routeParams',
        function ($scope,$location,$window,JobService,$routeParams) {
          // jQuery(function($)) {
          //   $(document).ready(function (){
          //       $(".button-collapse").sideNav();
          //   });
          // });
            // $scope.page=parseInt($routeParams.page);
            // $scope.search=($window.localStorage.jobSearch===null || $window.localStorage.jobSearch==="undefined")?"":$window.localStorage.jobSearch;
            // $scope.first=$scope.page>2;
            // $scope.previous=$scope.page>1;
            // if($scope.search==="") {
            //     JobService.getJobs($scope.page).then(function (res) {
            //         if(res.data.success==="false") return;
            //         $scope.jobs = res.data.data;
            //         $scope.more = res.data.more;
            //     });
            // }else{
            //     JobService.getJobsFiltered($scope.page,$scope.search).then(function (res) {
            //         if(res.data.success==="false") return;
            //         $scope.jobs = res.data.data;
            //         $scope.more = res.data.more;
            //     });
            // }
            // $window.localStorage.clear();
            // jQuery(function ($) {
            //     $(document).ready(function () {
            //         $("#search-jobs").keyup(function () {
            //             if($scope.search===""){
            //                 JobService.getJobs($scope.page).then(function(res){
            //                     if(res.data.success==="false") return;
            //                     $scope.more=res.data.more;
            //                     $scope.jobs=res.data.data;
            //                 });
            //             }else{
            //                 JobService.getJobsFiltered(1,$scope.search).then(function(res){
            //                     if(res.data.success==="false") return;
            //                     $scope.more=res.data.more;
            //                     $scope.first=false;
            //                     $scope.previous=false;
            //                     $scope.page=1;
            //                     jQuery(function ($) {
            //                         $("#a-first").addClass("ng-hide");
            //                         $("#a-previous").addClass("ng-hide");
            //                     });
            //                     $scope.jobs=res.data.data;
            //                 });
            //             }
            //         });
            //     });
            // });
            // $scope.changePage=function (code) {
            //     $window.localStorage.jobSearch=$scope.search;
            //     var sufix;
            //     switch (code){
            //         case 1: sufix=1;break;
            //         case 2: sufix=$scope.page-1;break;
            //         case 3: sufix=$scope.page+1;break;
            //         case 4: sufix=$scope.more;break;
            //     }
            //     $window.location="#!home/"+sufix;
            // };
        }]);
