app.controller("houseController", ["$scope", "Houses", "Rooms", "$modal", "$log", "$route", function ($scope, Houses, Rooms, $modal, $log, $route) {
    console.log("houseController.");

    $scope.house = {};

    $scope.$on("gotHouse", function (event, data) {
        $scope.house = data;
    });
    Houses.get();
    $scope.$on("reloadHouse", function () {
        $route.reload();
        $scope.selected = selectedItem;
    })

    Houses.get()

    $scope.reload = function () {
        $rootScope.$broadcast("reloadHouse");
    }
    window.setInterval(reload, 30000);

    $scope.cancel = function () {
        $modalInstance.dismiss('Close');
    };



}]);