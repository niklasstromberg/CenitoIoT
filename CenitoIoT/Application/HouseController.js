app.controller("houseController", ["$scope", "Houses", "Rooms", "$uibModal", "$log", "$route", "param", function ($scope, Houses, Rooms, $uibModal, $log, $route, param) {

    // variables
    id = param.id;
    $scope.house = {};

    // get data
    $scope.$on("gotHouse", function (event, data) {
        $scope.house = data;
    });
    Houses.get(id);

    // refresh data by timer
    $scope.reload = function () {
        Houses.get(id);
    }

    // timer
    window.setInterval($scope.reload, 3000);

    // close modal, reset id
    $scope.cancel = function () {
        delete id;
        $modalInstance.dismiss('Close');
    };

}]);