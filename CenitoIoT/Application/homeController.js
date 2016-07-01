app.controller("homeController", ["$scope", "Houses", "$modal", "$log", "$route", function ($scope, Houses, $modal, $log, $route) {
    var allHouses;

    $scope.$on("gotHouses", function (event, data) {
        $scope.output = JSON.stringify(data, null, '/t');
        allHouses = $scope.Houses = data;

    });
    Houses.Get();

    $scope.sortByHouseName = function () { };
    $scope.sortByRooms = function () { };

    // här ska in en redirect istället -> house.html
    $scope.open = function(view, house, action, size) {
        if(house) {
            var modalInstance = $modal.open({
                templateUrl: 'partials/house.html',
                controller: 'houseController',
                size: size
                //resolve: {
                //    param: function () {
                //        params = {
                //            id: house.HouseId,
                //            view: view,
                //            action: action
                //        }
                //        return params;
                //    }
                //}
            });
            modalInstance.result.then(function (selectedItem) {
                $route.reload();
                $scope.selected = selectedItem;
            }, function () {

            });
        }
    }
}]);