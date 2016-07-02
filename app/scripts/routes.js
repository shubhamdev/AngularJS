define([], function () {
  return {
    defaultRoutePath: '/',
    routes: {
      '/home': {
        templateUrl: 'scripts/modules/home/views/home.html',
        dependencies: ['HomeViewCtrl']
      },
      '/about': {
        templateUrl: 'scripts/modules/home/views/about.html',
        dependencies: ['AboutViewCtrl', 'app-color']
      },
      '/contact': {
        templateUrl: 'scripts/modules/home/views/contact.html',
        dependencies: ['ContactViewCtrl']
      },
      '/login': {
        templateUrl: 'scripts/modules/admin/views/login.html',
        dependencies: ['LoginCtrl']
      },
      '/':{
        templateUrl: 'scripts/modules/content/views/content.html',
        dependencies: ['contentCtrl']
      }
    }
  };
});