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
    $scope.weatherInfo = '';
    $scope.searchvalue = '';
    $scope.tableArray = '';


    $scope.updateStations =  function () {
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
    
    $scope.filterWeatherInfoList = function filterWeatherInfoList(searchvalue) {

        $scope.weatherInfo = weatherService.getAllWeatherInfoWithoutStations();

        weatherService.getAllWeatherInfoWithoutStations().then(function (response) {
            $scope.weatherInfo =  response.data;

            console.log($scope.weatherInfo[0].temp);

            $scope.tableArray = search($scope.weatherInfo,searchvalue);
            console.log($scope.tableArray);
        });




    };
    // $scope.filterWeatherInfoList();


    function search(source, value) {
        var results = [];
        var index;
        var entry;

        for (index = 0; index < source.length; ++index) {
            entry = source[index];
            if(entry.temp == value || entry.airPressure == value || entry.windForce == value || entry.okta == value || entry.cloudBase  == value || entry.humidity == value ){
                results.push(entry);
            }
        }
        console.table(results);

        return results;
    }


  /*  $scope.getVaderdata = function(){
        $scope.currentVaderData = weatherService.getAllWeatherInfoByStation($scope.station.station);
    };*/
}]);