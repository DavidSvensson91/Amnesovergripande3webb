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

    //Existerande stationer från databasen.
    $scope.station1 = {
        availableOptions: [
            {value: 1, name: 'Stockholm'},
            {value: 2, name: 'Göteborg'},
            {value: 3, name: 'Malmö'},
            {value: 4, name: 'Lund'},
            {value: 5, name: 'Umeå'},
            {value: 6, name: 'Väsby'}
        ]
    };

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


    //För att lägga till väderdata.
    $scope.vader = function(temperatur, date, lufttryck, luftfuktighet, vindstyrka, molnbashojd, himmel, molntyp, vindriktning) {

        $scope.date = moment().format('YYYY-MM-DD, h:mm:ss');


        var vaderinfo = {"temp" : temperatur, "date": date, "airPressure" : lufttryck, "humidity" : luftfuktighet,
            "windForce" : vindstyrka, "cloudBase" : molnbashojd, "okta" : himmel, "cloudType" : molntyp, "windDirection" : vindriktning};
        
        var jsonObrj = JSON.stringify(vaderinfo);


        console.log(date, molntyp, vindriktning, temperatur, luftfuktighet, vindstyrka, molnbashojd, himmel, lufttryck, vaderinfo, jsonObrj);
    };


    //För att lägga till stationer.
    $scope.add = function(addStation){
        $scope.addStation = addStation;

        var addItems = {"namn" : addStation, "weatherInfo":[ ]
        };

        var jsonObrjStation = JSON.stringify(addItems);
        console.log(jsonObrjStation);
    }
}]);