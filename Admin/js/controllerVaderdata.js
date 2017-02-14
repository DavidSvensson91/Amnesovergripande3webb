app.controller('vaderdata',function($scope, $filter){
    $scope.station = '';
    $scope.temperatur = '';
    $scope.date = '2017-01-01';
    $scope.luftfuktighet = '';
    $scope.vindstyrka = '';
    $scope.molnbashojd = '';
    $scope.himmel = '';
    $scope.lufttryck = '';

    //add station/cloudtype
    $scope.addStation = '';

    //Existerande stationer från databasen
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

    //Existerande molntyper från databasen
    $scope.molntyp1 = {
        availableOptions: [
            {value: 'Valkmoln'},
            {value: 'Dimmoln'}
        ]
    };

    //Existernade vindriktning från databasen
    $scope.vindriktning1 = {
        availableOptions: [
            {value: 'Nord'},
            {value: 'Syd'}
        ]
    };


    //För att lägga till väderdata
    $scope.vader = function(temperatur, date, lufttryck, luftfuktighet, vindstyrka, molnbashojd, himmel, molntyp1, vindriktning1) {
        $scope.temperatur = temperatur;
        $scope.date = date;
        $scope.lufttryck = lufttryck;
        $scope.luftfuktighet = luftfuktighet;
        $scope.vindstyrka = vindstyrka;
        $scope.molnbashojd = molnbashojd;
        $scope.himmel = himmel;
        $scope.molntyp = molntyp1;
        $scope.vindriktning = vindriktning1;

        var vaderinfo = {"temperatur" : temperatur, "date": date, "airPressure" : lufttryck, "humidity" : luftfuktighet,
            "windForce" : vindstyrka, "cloudBase" : molnbashojd, "okta" : himmel, "cloudType" : molntyp1, "windDirection" : vindriktning1};
        
        var jsonObrj = JSON.stringify(vaderinfo);


        console.log(date, molntyp1, vindriktning1, temperatur, luftfuktighet, vindstyrka, molnbashojd, himmel, lufttryck, vaderinfo, jsonObrj);
    };


    //För att lägga till stationer
    $scope.add = function(addStation){
        $scope.addStation = addStation;

        var addItems = {"namn" : addStation, "weatherInfo":[ ]
        };

        var jsonObrjStation = JSON.stringify(addItems);
        console.log(jsonObrjStation);
    }
});