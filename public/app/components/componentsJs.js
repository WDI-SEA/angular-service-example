angular.module('App')
.component('filmList', {
  templateUrl: 'app/componentsJs/home.html',
  controller: FilmListCtrl,
  controllerAs: 'filmList'
});

function FilmListCtrl($http) {
  var filmList = this;

  filmList.title = [];

  var req = {
    url: 'http://swapi.co/api/films/',
    method: 'GET'
  }

  $http(req).then(function success(response) {
    filmList.title = response.data;
  }, function error(response) {
      console.log(response);
  });
}

FilmListCtrl.$inject = ['$http'];
