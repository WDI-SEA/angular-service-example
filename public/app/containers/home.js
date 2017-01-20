angular.module('App')
.component('filmComp', {
  templateUrl: 'app/containers/home.html',
  controller: FilmCompCtrl,
  controllerAs: 'filmComp'
});

function FilmCompCtrl() {

}

FilmCompCtrl.$inject = [];
