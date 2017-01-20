angular.module("StarWarsApp", ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  "$locationProvider",
  function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
      .state('homeState', {
        url: '/',
        component: "homeComponent"
      })
      .state('filmDetailState', {
        url: '/film/:index',
        component: "filmDetail"
      });

      $locationProvider.html5Mode(true);
  }
]);
