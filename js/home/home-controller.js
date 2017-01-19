var app = angular.module("StarWarsApp");
app.controller("HomeCtrl", ["$scope", "FilmService",
    function($scope, FilmService) {
  $scope.message = "Home";
  $scope.films = FilmService.getFilms();
  $scope.newFilm = "";

  $scope.addNewFilm = function() {
    if ($scope.newFilm !== "") {
      FilmService.addFilm($scope.newFilm);
      console.log("adding film", $scope.newFilm)
      $scope.films = FilmService.getFilms();
      console.log("films:", $scope)
    }
  }
}]);
