app.controller("headerController", ["$rootScope", "$scope", "$location", function ($rootScope, $scope, $location) {
    console.log("headerController.");

    //$scope.$on("gotHouses", function (event, data) {
    //    $scope.output = JSON.stringify(data, null, '/t');
    //    $scope.houses = data;
    //});
    //Houses.get();

    $scope.isCollapsed = true;

    $scope.navCollapse = function () {
        $scope.isCollapsed = !$scope.isCollapsed;
    }

    $scope.GoTo = function (url) {
        $location.url(url);
        $scope.navCollapse();
        console.log(url);
    }


}]);

