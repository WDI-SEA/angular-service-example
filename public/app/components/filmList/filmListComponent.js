angular.module("StarWarsApp")
.component("filmList", {
  templateUrl: "app/components/filmList/filmList.html",
  controller: FilmListComponentCtrl,
  controllerAs: "filmList"
});

function FilmListComponentCtrl($http, FilmService) {
  var filmList = this;

  filmList.films = [];

  FilmService.getFilms().then(function success(response) {
    filmList.films = response;
  }, function error(response) {
    console.log(response);
  })

}

FilmListComponentCtrl.$inject = ["$http", "FilmService"];
