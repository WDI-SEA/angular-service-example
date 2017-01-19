angular.module("StarWarsApp")
.service("FilmService", ["$http", function($http) {
  var films = [
    "A New Hope",
    "The Empire Strikes Back",
    "Return of the Jedi"
  ];

  this.getFilms = function() {
    return films;
  }

  this.addFilm = function(name) {
    films.push(name);
  };

  this.getFilmDetails = function(i) {
    // using double equals because i came from
    // the URL query parameters and it's a string.
    if (i == 1) {
      return {
        year: 1977,
        title: "A New Hope",
        plot: "bla bla bla bla blb alba"
      }
    } else {
      return {
        year: 1977,
        title: "Other film",
        plot: "yadda yadda yadda yadda"
      }
    }
  }
}]);
