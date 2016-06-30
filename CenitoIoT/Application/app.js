var app = angular.module("CenitoIoT", ["ngRoute", "ui.bootstrap", "angularSpinner"]);

app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateurl: "partials/home2.html",
            controller: "homeController"
        })
    .when("/house", {
        templateurl: "partials/house.html",
        controller: "houseController"
    })
        .when("/room", {
            templateurl: "partials/room.html",
            controller: "roomController"
        })
    .otherwise({
        redirectTo: "/"
    });
    $locationProvider.html5Mode(true);
}]);