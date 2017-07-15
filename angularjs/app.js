angular.module('app', [
  'ngRoute',
  'ngStorage',
  'ngSanitize',


  //route
  'app.route',


  //controllers
  'app.controller.home',
  'app.controller.jobadd',
  'app.controller.job',
  'app.controller.login',
  'app.controller.profilecompany',
  'app.controller.profileuser',
  'app.controller.signup',

  //services
  'app.services.login',
  'app.services.signup'
  // Dependicies


]).constant('domain', 'http://192.168.30.139:8000');