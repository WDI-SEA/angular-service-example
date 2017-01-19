var app = angular.module("StarWarsApp");
app.controller("FilmCtrl", ["$scope", "$stateParams", "FilmService",
    function($scope, $stateParams, FilmService) {

  $scope.film = {};
  console.log("film before: ", $scope.film);

  $scope.message = "FilmCtrl " + $stateParams.id;
  console.log("message: ", $scope.message);

  FilmService.getFilms().then(function(films){
    $scope.film = films[$stateParams.id];
  });

  console.log("film after: ", $scope.film);

}]);
