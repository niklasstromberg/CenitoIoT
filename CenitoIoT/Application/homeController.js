app.controller("homeController", ["$rootScope", "$scope", "Houses", "$log", "$route", "$location", function ($rootScope, $scope, Houses, $log, $route, $location) {
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

}]);