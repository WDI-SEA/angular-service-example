angular.module('StarWarsApp')
.component('homeComp', {
  templateUrl: 'js/home/home-view.html',
  controller: HomeCompCtrl,
  controllerAs: 'homeComp'
});

function HomeCompCtrl(FilmService) {
	var homeComp = this;
  homeComp.message = "Home";
  homeComp.newFilm = "";
  console.log('homeComp',homeComp);

  FilmService.getFilms().then(function(films) {
    console.log("films:", films);
    homeComp.films = films;
  });

  homeComp.addNewFilm = function() {
    if (homeComp.newFilm !== "") {
      FilmService.addFilm(homeComp.newFilm);
      homeComp.films = FilmService.getFilms();
    }
  }
}

HomeCompCtrl.$inject = ["FilmService"];
