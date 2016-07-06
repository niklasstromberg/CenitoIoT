var app = angular.module("CenitoIoT", ["ngRoute", "ui.bootstrap", "ui.bootstrap.modal", "angularSpinner", "angular.filter", "ui.grid"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "partials/home.html",
            controller: "homeController"
        })
        .when("/house", {
            templateUrl: "partials/house.html",
            controller: "houseController"
        })
        .when("/room", {
            templateUrl: "partials/room.html",
            controller: "roomController"
        })
        .when("/header", {
            templateUrl: "partials/header.html",
            controller: "headerController"
        })
    .otherwise({
        redirectTo: "/"
    });
    $locationProvider.html5Mode(true);
}]);