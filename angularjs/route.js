angular.module('app.route', [])
  .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
          .when('/home',{
              templateUrl:'home.html',
              controller:'HomeController'
          })
          .when('/login/:type',{
              templateUrl:'login.html',
              controller:'LoginController'
          })
          .when('/singUp',{
              templateUrl:'singup.html',
              controller:'SignUpController'
          })
          .when('profile/user/:id',{
              templateUrl:'profile-user.html',
              controller:'ProfileUserController'
          })
          .when('profile/company/:id',{
              templateUrl:'profile-company.html',
              controller:'ProfileCompanyController'
          })
          .when('job/add',{
              templateUrl:'job-add.html',
              controller:'JobAddController'
          })
          .when('job/:id',{
              templateUrl:'job.html',
              controller:'JobController'
          })
          .otherwise({
              redirectTo: '/login'
          });
  }]);
