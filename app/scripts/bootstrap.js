require.config({
  baseUrl: '/scripts',
  timeStamp: "bust=" + (new Date()).getTime(),
  paths: {
    'angular': '/bower_components/angular/angular',
    'angular-route': '/bower_components/angular-route/angular-route',
    'bootstrap': '../lib/bootstrap/js/bootstrap.min',
    'jquery': '/bower_components/jquery/dist/jquery',


    HomeViewCtrl: 'modules/home/controllers/HomeViewController',
    AboutViewCtrl: 'modules/home/controllers/AboutViewController',
    ContactViewCtrl: 'modules/home/controllers/ContactViewController',
    LoginCtrl: 'modules/admin/controllers/loginController',
    contentCtrl:'modules/content/controllers/contentController',

    'app-color':'directives/app-color'
  },
  shim: {
    'app': {
      deps: ['angular', 'angular-route', 'bootstrap']
    },
    'angular-route': {
      deps: ['angular']
    },
    'bootstrap': {
      deps: ['jquery']
    }
  }
});

require
(
    [
        'app'
    ],
    function (app) {
      angular.bootstrap(document, ['app']);
    }
);