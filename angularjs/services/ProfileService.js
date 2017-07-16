angular.module('app.service.profile', [])

    .factory('ProfileService',['$http','domain', function ($http,domain) {

        var service = {};
        service.submit=function (user) {
            var data={
                user:user
            };
            return $http.post(domain+'user',data);
        };
        service.getCompanyPictures=function(id){
            return $http.get(domain+"company/images/"+id);
        };
        return service;
    }]);