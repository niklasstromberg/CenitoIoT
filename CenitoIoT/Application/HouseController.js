app.controller("houseController", ["$scope", "Houses", "Rooms", "$modal", "$log", "$route", function ($scope, Houses, Rooms, $modal, $log, $route) {

    $scope.open = function (view, room, action, size) {
        if (house) {
            var modalInstance = $modal.open({
                templateUrl: 'partials/room.html',
                controller: 'roomController',
                size: size,
                resolve: {
                    param: function () {
                        params = {
                            id: house.HouseId,
                            view: view,
                            action: action
                        }
                        return params;
                    }
                }
            });
            modalInstance.result.then(function (selectedItem) {
                $route.reload();
                $scope.selected = selectedItem;
            }, function () {

            });
        }
    }
}]);