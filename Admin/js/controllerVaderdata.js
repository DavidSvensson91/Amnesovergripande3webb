angular.module('myApp').controller('vaderdata',['$scope','$filter','$http','weatherService',function($scope, $filter ,$http, weatherService){
    $scope.station = '';
    $scope.temperatur = '';
    $scope.luftfuktighet = '';
    $scope.vindstyrka = '';
    $scope.molnbashojd = '';
    $scope.himmel = '';
    $scope.lufttryck = '';
    $scope.molntyp = '';
    $scope.vindriktning = '';
    weatherService.getAllWeatherInfo();

    //addStation info.
    $scope.addStation = '';

    $scope.date = moment().format('YYYY-MM-DD');

    //Existerande molntyper från databasen.
    $scope.molntyp = {
        availableOptions: [
            {value: 'Valkmoln'},
            {value: 'Dimmoln'}
        ]
    };

    //Existernade vindriktningar från databasen.
    $scope.vindriktning = {
        availableOptions: [
            {value: 'Nord'},
            {value: 'Syd'}
        ]
    };

    // Hämta stationer existerande stationer från databasen.
    $scope.station = weatherService.getAllWeatherInfo();

    //För att lägga till väderdata.
    $scope.vader = function(temperatur, date, lufttryck, luftfuktighet, vindstyrka, molnbashojd, himmel) {

        $scope.date = moment().format('YYYY-MM-DD');
        var ha = parseInt(date);
        console.log("dgfsdgsdg" + ha);

        var molntyp1 = $scope.molntyp.molntyp;
        var vindriktning1 = $scope.vindriktning.vindriktning;

        var vaderinfo = {"temp":  temperatur, "date": date, "airPressure": lufttryck, "humidity": luftfuktighet,
            "windForce": vindstyrka, "cloudBase": molnbashojd, "okta": himmel, "cloudType": molntyp1, "windDirection": vindriktning1};

        var stationId = $scope.station.station;
        var statId = {"weather_station_id": stationId};

        var jsonStn = angular.toJson(statId);
        var jsonObrj = angular.toJson(vaderinfo);

        weatherService.createWeatherInfo(stationId ,jsonObrj);

        console.log(jsonStn, jsonObrj);
    };


    // var getStation = $http.get('http://localhost:8080/weather-station/1', {'Content-Type': 'application/x-www-form-urlencoded'});
    // var hej = JSON.stringify(getStation);
    // console.log(hej);

    //För att lägga till stationer.
    $scope.addStations = function(addStation) {
        var jsonObrjStation = angular.toJson(addStation);
        weatherService.createWeatherStation(jsonObrjStation);
    };

    $scope.getVaderdata = function(){
        var test2 = $scope.station.station;
        $scope.getVaderdata = weatherService.getAllWeatherInfoByStation(test2);
        console.log(test2)
    };
}]);