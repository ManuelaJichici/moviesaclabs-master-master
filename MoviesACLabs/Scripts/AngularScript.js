var app = angular.module('ang', []);


app.controller('MainControler', function($scope){
    $scope.addNewItem = "";
    $scope.items = [ {Text:"item1", ID:1, Status:false} , {Text:"item2", ID:2 , Status : false} ];

    var index = 3;

    $scope.addItem = function(){
        $scope.items.push({
            Text : $scope.addNewItem,
            ID: index++,
            Status : false,
        });
     //   console.log($scope.items.pop())
    };
    $scope.countActive = items.length;
  //  $scope.count = function () {

    //}

    
});