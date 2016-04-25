var app = angular.module('angmovies', []);


app.service('ActorsService', function($http){
    this.getActors = function(){
        return $http({
            method: "GET",
            url: "/api/Actors",
        });
    };
    this.addActor = function (theActor) {
          return $http.post("/api/Actors", theActor);
     };

    this.addActor = function (Id) {
        return $http.post("/api/Actors", Id);
    };
})

app.controller('ActorsController', function($scope, ActorsService) {
    $scope.actors = [];
    $scope.newActor = { DateOfBirth: "2016-04-25T11:22:39.762Z" };

    ActorsService.getActors().then(function(data){
        $scope.actors = data.data;
    });
    $scope.addActor = function () {

        var addingActor = {
            Name: $scope.newActor.Name,
            DateOfBirth: $scope.newActor.DateOfBirth,
            Revenue: $scope.newActor.Revenue,
        };

        console.log(addingActor);
        ActorsService.addActor(addingActor).then(function (data) {
            console.log(data,data.Id);
            addingActor.Id = data.data.Id;
            //console.log($scope.ActorsList);
            $scope.actors.push(addingActor);
          //  console.log($scope.ActorsList);
            
        });
    };

    $scope.DeleteActor = function (Id) {
        var delActor = $scope.actors[Id];

        API.DeletePerson({ id: delPerson.id }, function (success) {
            $scope.actors.splice(Id, 1);
        });
    };
})
