angular.module('app.service.job', [])

    .factory('JobService',['$http','domain', function ($http,domain) {

        var service = {};
        service.getJobs=function (page) {

            return $http.get(domain+''+page);
        };
        service.getJobsFiltered=function (page,filter) {

            return $http.get(domain+''+page+filter);
        };
        return service;
    }]);