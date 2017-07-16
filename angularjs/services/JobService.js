angular.module('app.service.job', [])

    .factory('JobService',['$http','domain', function ($http,domain) {

        var service = {};
        service.getJobs=function () {

            return $http.get(domain+'jobs/all');
        };
        service.getJobsFiltered=function (page,filter) {

            return $http.get(domain+''+page+filter);
        };
        service.postJob=function (job) {
            var data={
                job:job
            };
            return $http.post(domain+'job',data);
        };
        return service;
    }]);