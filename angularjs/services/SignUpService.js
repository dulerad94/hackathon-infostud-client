angular.module('app.service.signup', [])

    .factory('SignUpService',['$http','domain', function ($http,domain) {

        var service = {};
        service.signUpUser=function (username,password) {
            var data={
                username:username,
                password:password
            };
            return $http.post(domain+'',data);
        };
        service.SignUpCompany=function (username,password) {
            var data={
                username:username,
                password:password
            };
            return $http.post(domain+'',data);
        };
        return service;
    }]);