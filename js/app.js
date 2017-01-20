angular.module("StarWarsApp", ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      component: 'homeComp'
    })
    .state('film', {
      url: '/film/:id',
      component: 'filmComp'
    })
  }]);
