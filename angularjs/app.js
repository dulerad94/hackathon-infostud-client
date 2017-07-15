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
  'app.controller.signup'

  //services

  // Dependicies


]).constant('domain', 'URL OTASEV');