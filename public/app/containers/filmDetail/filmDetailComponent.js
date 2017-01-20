angular.module("StarWarsApp")
.component("filmDetail", {
  templateUrl: "app/containers/filmDetail/filmDetail.html",
  controller: FilmDetailComponentCtrl,
  controllerAs: "filmDetail"
});

function FilmDetailComponentCtrl($http, FilmService, $stateParams) {
  var filmDetail = this;

  filmDetail.details = {};

  FilmService.getFilmDetails($stateParams.index).then(function success(response) {
    filmDetail.details = response;
    console.log(filmDetail.details);
  }, function error(response) {
    console.log(response);
  });

}

FilmDetailComponentCtrl.$inject = ["$http", "FilmService", "$stateParams"];
