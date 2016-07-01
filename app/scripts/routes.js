define([], function () {
  return {
    defaultRoutePath: '/',
    routes: {
      '/': {
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
      }
    }
  };
});