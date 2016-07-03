app.controller("headerController", ["$scope", "$location", "Login", "$modal", "Houses", function ($scope, $location, Login, $modal, Houses) {
    console.log("jag är här");
    $scope.isCollapsed = true;

    $scope.loginStatus = function (status) {
        Login.loginStatus(status);
        $scope.navCollapse();
    };

    $scope.navCollapse = function () {
        $scope.isCollapsed = !$scope.isCollapsed;
    }

    $scope.GoTo = function (url) {
        $location.url(url);
        $scope.navCollapse();
    }
   
    
}]);

