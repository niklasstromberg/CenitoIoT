var app = angular.module("CenitoIoT", ["ngRoute", "ui.bootstrap", "angularSpinner"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateurl: "Partials/home2.html",
            controller: "homeController"
        })
        .when("/house", {
            templateurl: "Partials/house.html",
            controller: "houseController"
        })
        .when("/room", {
            templateurl: "Partials/room.html",
            controller: "roomController"
        })
        .when("/header", {
            templateurl: "Partials/header.html",
            controller: "headerController"
        })
    .otherwise({
        redirectTo: "/"
    });
    $locationProvider.html5Mode(true);
}]);