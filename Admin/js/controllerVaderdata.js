angular.module('myApp').controller('vaderdata', ['$scope', '$filter', '$http', 'weatherService', function ($scope, $filter, $http, weatherService) {
    $scope.station = '';
    $scope.temperatur = '';
    $scope.luftfuktighet = '';
    $scope.vindstyrka = '';
    $scope.molnbashojd = '';
    $scope.himmel = '';
    $scope.lufttryck = '';
    $scope.molntyp = '';
    $scope.vindriktning = '';
    $scope.stations = '';
    $scope.tableArray = '';


    $scope.updateStations = function () {
        $scope.stations = weatherService.getAllWeatherInfo();
    };

    $scope.updateStations();

    //addStation info.
    $scope.addStation = '';

    $scope.date = moment().format('YYYY-MM-DD h:mm:ss');

    //Existerande molntyper från databasen.
    $scope.molntyp = {
        availableOptions: [
            {value: 'Valkmoln'},
            {value: 'Dimmoln'},
            {value: 'Böljemoln'},
            {value: 'Skiktmoln'},
            {value: 'Fjädermoln'},
            {value: 'Slöjmoln'},
            {value: 'Makrillmoln'},
            {value: 'Inga moln'}

        ]
    };

    //Existernade vindriktningar från databasen.
    $scope.vindriktning = {
        availableOptions: [
            {value: 'Nord'},
            {value: 'Syd'},
            {value: 'Ost'},
            {value: 'Väst'},

            {value: 'Nordost'},
            {value: 'Nordväst'},

            {value: 'Sydost'},
            {value: 'Sydväst'}
        ]
    };

    // Hämta stationer existerande stationer från databasen.
    $scope.getStations = function () {
        $scope.station = weatherService.getAllWeatherInfo();
    };
    $scope.getStations();

    //För att lägga till väderdata.
    $scope.vader = function (temperatur, date, lufttryck, luftfuktighet, vindstyrka, molnbashojd, himmel) {

        $scope.date = moment().format('YYYY-MM-DD h:mm:ss');
        var ha = parseInt(date);
        console.log("dgfsdgsdg" + ha);

        var molntyp1 = $scope.molntyp.molntyp;
        var vindriktning1 = $scope.vindriktning.vindriktning;

        var vaderinfo = {
            "temp": temperatur,
            "date": date,
            "airPressure": lufttryck,
            "humidity": luftfuktighet,
            "windForce": vindstyrka,
            "cloudBase": molnbashojd,
            "okta": himmel,
            "cloudType": molntyp1,
            "windDirection": vindriktning1
        };

        var stationId = $scope.station.station;
        var statId = {"weather_station_id": stationId};

        var jsonStn = angular.toJson(statId);
        var jsonObrj = angular.toJson(vaderinfo);

        weatherService.createWeatherInfo(stationId, jsonObrj);

        $scope.station = '';
        $scope.temperatur = '';
        $scope.luftfuktighet = '';
        $scope.vindstyrka = '';
        $scope.molnbashojd = '';
        $scope.himmel = '';
        $scope.lufttryck = '';
        $scope.molntyp = '';
        $scope.vindriktning = '';

        console.log(jsonStn, jsonObrj);
    };


    //För att lägga till stationer.
    $scope.addStations = function (AddedStation) {
        var jsonObrjStation = angular.toJson(AddedStation);
        weatherService.createWeatherStation(jsonObrjStation);
        $scope.getStations();
        $scope.addStation = '';
    };

    $scope.deleteWeatherInfoAndUpdate = function deleteWeatherInfoAndUpdate(id) {
        $scope.updateStations();
        weatherService.deleteWeatherInfo(id);
        $scope.updateStations();
    };

    $scope.deleteAllWeatherInfoAndStations = function deleteAllWeatherInfoAndStations() {
        for (var i = 0; i < $scope.stations.$$state.value.length; ++i) {
            weatherService.deleteWeatherStation($scope.stations.$$state.value[i].id);
        }
    };

    $scope.UpdateWeatherInfo = function UpdateWeatherInfo(id, temp, date, airPressure, humidity, windForce, cloudBase, okta, cloudType, windDirection, stationID) {
        var test4 = $scope.stations;
        console.log(test4);
        var vaderinfo2 = {
            "id": id,
            "temp": temp,
            "date": date,
            "airPressure": airPressure,
            "humidity": humidity,
            "windForce": windForce,
            "cloudBase": cloudBase,
            "okta": okta,
            "cloudType": cloudType,
            "windDirection": windDirection
        };
        var jsonObrj2 = angular.toJson(vaderinfo2);
        $scope.updateStations();
        weatherService.updateWeatherInfo(stationID, jsonObrj2);
        $scope.updateStations();
    };

    $scope.filterWeatherInfoList = function filterWeatherInfoList(searchvalue) {
        weatherService.getAllWeatherInfoWithoutStations().then(function (response) {
            $scope.tableArray = search(response.data, searchvalue);
        });
    };

    function search(source, value) {
        var results = [];
        var index;
        var entry;

        for (index = 0; index < source.length; ++index) {
            entry = source[index];
            if (entry.temp == value ||
                entry.airPressure == value ||
                entry.windForce == value ||
                entry.okta == value ||
                entry.cloudBase == value ||
                entry.humidity == value ||
                entry.windDirection.toUpperCase() == value.toUpperCase() ||
                entry.cloudType.toUpperCase() == value.toUpperCase() ||
                entry.date == value
            ) {
                results.push(entry);
            }
        }
        return results;
    }
}]);