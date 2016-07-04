app.service("restService", ["$http", "$rootScope", "$location", function ($http, $rootScope, $location) {

    var restServant = {
        Call: function (url, method, data, broadcastName) {

            if (data === false) {
                return false;
            }

            $http({
                url: "/api/" + url,
                method: method,
                data: data,
                responseType: "json"
            }).then(function successCallback(data) {
                $rootScope.thrownError = "";
                $rootScope.msg = "";
                broadcastName = broadcastName ? broadcastName : "success";
                $rootScope.$broadcast(broadcastName, data);
            }), function errorCallback(data, thrownError) {
                console.log(data, thrownError);
                $location.url('/error');
            }
            setTimeout(function () {
                $rootScope.$broadcast("gotError");
            }, 200);
            return true;
        }
    };
    return restServant;
}]);

app.service("Houses", ["restService", function (restService) {
    var houseServant = {
        get: function (Id) {
            var broadcast = Id ? "gotHouse" + Id : "gotHouses";
            var restUrl = Id ? "houses/" + Id : "houses/";
            restService.Call(restUrl, "GET", {}, broadcast);
        }
    };
    return houseServant;
}]);

app.service("Rooms", ["restService", function (restService) {
    var roomServant = {
        get: function (Id) {
            var broadcast = Id ? "gotRoom" : "gotRooms";
            var restUrl = Id ? "rooms/" + Id : "rooms/";
            restService.restCall(restUrl, "GET", {}, broadcast);
        }
    };
    return roomServant;
}]);