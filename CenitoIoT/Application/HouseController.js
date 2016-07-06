app.controller("houseController", ["$scope", "Houses", "Rooms", "$uibModal", "$log", "$route", "param", function ($scope, Houses, Rooms, $uibModal, $log, $route, param) {
    console.log("houseController.");

    var id = param.id;
    $scope.house = {};

    $scope.$on("gotHouse", function (event, data) {
        $scope.house = data;
    });
    Houses.get(id);
    //$scope.$on("reloadHouse", function () {
    //    $route.reload();
    //    $scope.selected = selectedItem;
    //})



    $scope.reload = function () {
        Houses.get(id);
    }
    window.setInterval($scope.reload, 3000);

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };



}]);