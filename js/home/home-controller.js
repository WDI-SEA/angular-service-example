var app = angular.module("StarWarsApp");
app.controller("HomeCtrl", ["$scope", "FilmService",
    function($scope, FilmService) {
  $scope.message = "Home";
  $scope.films = FilmService.getFilms();
}]);
