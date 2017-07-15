angular.module('app.service.signup', [])

    .factory('SignUpService',['$http','domain', function ($http,domain) {

        var service = {};
        service.signUpUser=function (username,password) {
            var data={
                email:username,
                password:password
            };
            return $http.post(domain+'signupUser?XDEBUG_SESSION_START=11715',data);
        };
        service.signUpCompany=function (username,password) {
            var data={
                email:username,
                password:password
            };
            return $http.post(domain+'signupCompany',data);
        };
        return service;
    }]);