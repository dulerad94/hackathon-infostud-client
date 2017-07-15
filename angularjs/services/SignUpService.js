angular.module('app.service.signup', [])

    .factory('SignUpService',['$http','domain', function ($http,domain) {

        var service = {};
        service.signUpUser=function (username,password) {
            var data={
                email:username,
                password:password
            };
            var a=$http.post(domain+'signupUser',data);
            return a;
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