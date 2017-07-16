angular.module('app', [
  'ngRoute',
  'ngStorage',
  'ngSanitize',
  'ngMaterial',
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
  'app.controller.jobadd2',
  'app.controller.jobadd3',


  //services
  'app.service.login',
  'app.service.signup',
  'app.service.job',
  'app.service.profile'
  // Dependicies


]).constant('domain', 'http://localhost/hackathon-api/public/');