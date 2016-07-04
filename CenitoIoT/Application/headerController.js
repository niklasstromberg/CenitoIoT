app.controller("headerController", ["$scope", "$location", "Houses", function ($scope, $location, Houses) {
    console.log("headerController.");

    $scope.$on("gotHouses", function (event, data) {
        $scope.output = JSON.stringify(data, null, '/t');
        $scope.houses = data;
    });
    Houses.get(1);
    console.log(Houses);
    $scope.isCollapsed = true;

    $scope.navCollapse = function () {
        $scope.isCollapsed = !$scope.isCollapsed;
    }



    $scope.GoTo = function (url) {
        $location.url(url);
        $scope.navCollapse();
    }
   
    
}]);

