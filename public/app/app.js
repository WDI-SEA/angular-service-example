angular.module('StarWarsApp', ['ui,router'])
.config([ '$stateProvider',
          '$urlRouterProvider',
          '$locationProvider',
          function(
            $stateProvider,
            $urlRouterProvider,
            $locationProvider
          ) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
            .state('home', {
              url: '/',
              component: 'FilmComp'
            });
            $locationProvider.html5Mode(true);
          }
]);
