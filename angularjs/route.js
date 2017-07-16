angular.module('app.route', [])
  .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
          .when('/home/:page',{
              templateUrl:'./views/home.html',
              controller:'HomeController'
          })
          .when('/login/:type',{
              templateUrl:'./views/login.html',
              controller:'LoginController'
          })
          .when('/sign-up/:type',{
              templateUrl:'./views/signup.html',
              controller:'SignUpController'
          })
          .when('/profile/user/:id',{
              templateUrl:'./views/profile-user.html',
              controller:'ProfileUserController'
          })
          .when('/profile/company/:id',{
              templateUrl:'./views/profile-company.html',
              controller:'ProfileCompanyController'
          })
          .when('/job/add',{
              templateUrl:'./views/job-add.html',
              controller:'JobAddController'
          })
          .when('/job/add-2',{
              templateUrl:'./views/job-add-2.html',
              controller:'JobAdd2Controller'
          })
          .when('/job/add-3',{
              templateUrl:'./views/job-add-3.html',
              controller:'JobAdd3Controller'
          })
          .when('/job/:id',{
              templateUrl:'./views/job.html',
              controller:'JobController'
          })

          .otherwise({
              redirectTo: '/home/1'
          });
  }]);
