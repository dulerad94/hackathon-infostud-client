angular.module('app', [
  'ngRoute',
  'ngStorage',
  'ngSanitize',
  'ui.materialize',

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
  'app.service.login',
  'app.service.signup',
  'app.service.job'
  // Dependicies


]).constant('domain', 'http://localhost/hackathon-api/public/');