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
                age:job.age,
                pay:job.pay,
                sex:job.sex,
                tag:job.tag,
                requirements:job.requirements,
                what_we_offer:job.what_we_offer,
                companyID:job.companyID
            };
            return $http.post(domain+'job/new',data);
        };
        service.getJob=function (id) {

            return $http.get(domain+"job/"+id);
        };
        service.getAllTags=function () {
            var data={
              name:""
            };
          return $http.post(domain+"tag/filter",data);
        };
        service.getBestUsersForAd=function (jobID) {

            return $http.get(domain+"job/bestUsers/"+jobID);
        };
        service.contactUser=function(userID,jobID){
          var data={
              'user_id':userID,
              'ad_id':jobID
          };
            return $http.post(domain+"sendJobOffer",data);
        };
        service.pdf=function(jobID){

            return $http.get(domain+"pdf/"+jobID);
        };
        return service;
    }]);