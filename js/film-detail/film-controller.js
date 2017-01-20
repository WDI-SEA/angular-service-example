angular.module('StarWarsApp')
.component('filmComp', {
  templateUrl: 'js/film-detail/film-detail-view.html',
  controller: FilmCompCtrl,
  controllerAs: 'filmComp'
});

function FilmCompCtrl($stateParams, FilmService) {
	var filmComp = this;
  filmComp.message = "FilmCtrl " + $stateParams.id;
  filmComp.film = FilmService.getFilmDetails($stateParams.id);
}

FilmCompCtrl.$inject = ["$stateParams", "FilmService"];
