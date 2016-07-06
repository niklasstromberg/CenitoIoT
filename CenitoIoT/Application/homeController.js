app.controller("homeController", ["$rootScope", "$scope", "Houses", "$log", "$route", "$location", "$uibModal", function ($rootScope, $scope, Houses, $log, $route, $location, $uibModal) {
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

    $scope.open = function (house) {
        if (house) {
            var uibModalInstance = $uibModal.open({
                templateUrl: 'partials/house.html',
                controller: 'houseController',
                //size: size,
                resolve: {
                    param: function () {
                        params = {
                            id: house.HouseId,
                        }
                        return params;
                    }
                }
            });
            uibModalInstance.result.then(function (selectedItem) {
                $route.reload();
                $scope.selected = selectedItem;
            }, function () {

            });
        }
    }

}]);