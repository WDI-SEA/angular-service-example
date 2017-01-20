angular.module("StarWarsApp")
.component("homeComponent", {
  templateUrl: "app/containers/home/home.html",
  controller: HomeComponentCtrl,
  controllerAs: "homeComponent"
})

function HomeComponentCtrl() {
  
}

HomeComponentCtrl.$inject = []
