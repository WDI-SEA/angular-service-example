angular.module("StarWarsApp")
.service("FilmService", ["$http", function($http) {

  this.getFilms = function() {
    var req = {
      url: 'http://swapi.co/api/films/',
      method: 'GET',
    };
    return $http(req).then(function(res) {
      console.log("RESULTS", res.data.results);
      if (res.status !== 200) {
        return [];
      }
      return res.data.results;
    });
  };

  this.getFilmDetails = function(results, i) {
    console.log("results: ", results.value);
    return results[i];
  };
}]);
