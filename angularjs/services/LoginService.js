angular.module('app.service.login', [])

    .factory('LoginService',['$http','domain', function ($http,domain) {

        var service = {};
        service.loginUser=function (username,password) {
            var data={
                email:username,
                password:password
            };
            return $http.post(domain+'loginUser',data);
        };
        service.loginCompany=function (username,password) {
            var data={
                email:username,
                password:password
            };
            return $http.post(domain+'loginCompany',data);
        };
        return service;
    }]);