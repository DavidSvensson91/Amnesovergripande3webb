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

    $scope.date = moment().format('YYYY-MM-DD, h:mm:ss');

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
    $scope.vader = function(temperatur, date, lufttryck, luftfuktighet, vindstyrka, molnbashojd, himmel, molntyp, vindriktning) {

        $scope.date =  1;//moment().format('YYYY-MM-DD, h:mm:ss');


        var vaderinfo = {"temp" : temperatur, "date": date, "airPressure" : lufttryck, "humidity" : luftfuktighet,
            "windForce" : vindstyrka, "cloudBase" : molnbashojd, "okta" : himmel, "cloudType" : molntyp, "windDirection" : vindriktning};
        
        var jsonObrj = JSON.stringify(vaderinfo);

        var stationId = document.getElementById('sel1').value;

        var statId = {"id" : stationId};

        var jsonStn = JSON.stringify(statId);

        //weatherService.updateWeatherInfo(jsonObrj);

        console.log(date, molntyp, vindriktning, temperatur, luftfuktighet, vindstyrka, molnbashojd, himmel, lufttryck, vaderinfo, jsonObrj);
    };


    // var getStation = $http.get('http://localhost:8080/weather-station/1', {'Content-Type': 'application/x-www-form-urlencoded'});
    // var hej = JSON.stringify(getStation);
    // console.log(hej);

    //För att lägga till stationer.
    $scope.addStations = function(addStation) {
        var jsonObrjStation = JSON.stringify(addStation);
        weatherService.createWeatherStation(jsonObrjStation);
    };
}]);