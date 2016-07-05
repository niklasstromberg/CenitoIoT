app.controller("homeController", ["$rootScope", "$scope", "Houses", "$log", "$route", "$location", function ($rootScope, $scope, Houses, $log, $route, $location, $uibModal) {
    console.log("homeController");

    $scope.$on("gotHouses", function (event, data) {
        $scope.output = JSON.stringify(data, null, '/t');
        $scope.houses = data;
        console.log(data);
    });
    Houses.get();

    $scope.GoTo = function (url) {
        $location.url(url);
        console.log(url);
    }

    $scope.open = function (house, size) {
        if (house) {
            var modalInstance = $uibModal.open({
                templateUrl: 'partials/house.html',
                controller: 'houseController',
                size: size,
                resolve: {
                    param: function () {
                        params = {
                            id: house.HouseId,
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