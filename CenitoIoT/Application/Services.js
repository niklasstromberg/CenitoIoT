app.service("rest", ["$http", "$rootScope", "$location", function ($http, $rootScope, $location) {

    var rest = {
        Call: function (url, method, data, broadcastName) {
            if (method != "GET") {
            }
            if (data === false) {
                return false;
            }

            //var rawFile = new XMLHttpRequest();
            //rawFile.open("GET", "file:///data/Houses.json", false);
            //rawFile.onreadystatechange = function () {
            //    if (rawFile.readyState = 4) {
            //        if (rawFile.status == 200 || rawFile.status == 0) {
            //            var allText = rawFile.responseText;
            //            console.log("From file read: ", JSON.parse(allText));
            //        };
            //    };
            //};

            $http({
                url: "/api/" + url,
                method: method,
                data: data,
                responseType: "json"
            }).success(function (data) {
                $rootScope.thrownError = "";
                $rootScope.msg = "";
                broadcastName = broadcastName ? broadcastName : "success";
                $rootScope.$broadcast(broadcastName, data);
            }).error(function (data, thrownError) {
                Console.log(data, thrownError);
                $location.url('/error');
            })
            //$rootScope.thrownError = thrownError;
            //$rootScope.msg = msg;
            
            setTimeout(function () {
                $rootScope.$broadcast("gotError");
            }, 200);
            return true;
        }
    };
    return rest;
}]);

app.service("Houses", ["rest", function (rest) {
    var houseServant = {
        get: function (Id) {
            var broadcast = Id ? "gotHouse" + Id : "gotHouses";
            var restUrl = Id ? "houses/" + Id : "houses/";
            rest.Call(restUrl, "GET", {}, broadcast);
        }
    };
    return houseServant;
    console.log("houseServant levererar: " + houseServant);
}]);

app.service("Rooms", ["rest", function (rest) {
    var roomServant = {
        get: function (Id) {
            var broadcast = Id ? "gotRoom" : "gotRooms";
            var restUrl = Id ? "rooms/" + Id : "rooms/";
            rest.restCall(restUrl, "GET", {}, broadcast);
        }
    };
    return roomServant;
}]);