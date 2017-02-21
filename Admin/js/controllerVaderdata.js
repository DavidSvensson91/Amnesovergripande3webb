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
    $scope.currentVaderData = '';
    $scope.stations = '';

    $scope.updateStations = function () {
        $scope.stations = weatherService.getAllWeatherInfo();
    };
    $scope.updateStations();

    //addStation info.
    $scope.addStation = '';

    $scope.date = moment().format('YYYY-MM-DD');

    //Existerande molntyper från databasen.
    $scope.molntyp = {
        availableOptions: [
            {value: 'Valkmoln'},
            {value: 'Dimmoln'},
            {value: 'Böljemoln'},
            {value: 'Skiktmoln'},
            {value: 'Fjädermoln'},
            {value: 'Slöjmoln'},
            {value: 'Makrillmoln'}

        ]
    };

    //Existernade vindriktningar från databasen.
    $scope.vindriktning = {
        availableOptions: [
            {value: 'Nord'},
            {value: 'Syd'},
            {value: 'Öst'},
            {value: 'Väst'}
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
    $scope.addStations = function(AddedStation) {
        var jsonObrjStation = angular.toJson(AddedStation);
        weatherService.createWeatherStation(jsonObrjStation);
    };

    $scope.deleteWeatherInfoAndUpdate = function deleteWeatherInfoAndUpdate(id) {
        $scope.updateStations();
        console.log(id);
        weatherService.deleteWeatherInfo(id);
        $scope.updateStations();
    };

    $scope.UpdateWeatherInfo = function UpdateWeatherInfo(id, temp, date, airPressure, humidity, windForce, cloudBase, okta, cloudType, windDirection , stationID) {

        var test4 = $scope.stations;

        console.log(test4);

        var vaderinfo2 = {"id": id, "temp":  temp, "date": date, "airPressure": airPressure, "humidity": humidity,
            "windForce": windForce, "cloudBase": cloudBase, "okta": okta, "cloudType": cloudType, "windDirection": windDirection};
        var jsonObrj2 = angular.toJson(vaderinfo2);

        $scope.updateStations();
        weatherService.updateWeatherInfo(stationID,jsonObrj2);
        $scope.updateStations();
    };


  /*  $scope.getVaderdata = function(){
        $scope.currentVaderData = weatherService.getAllWeatherInfoByStation($scope.station.station);
    };*/
}]);