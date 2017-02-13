app.controller('vaderdata',function($scope){
    $scope.station = '';
    $scope.temp = '';
    $scope.luftfuktighet = '';
    $scope.vindstyrka = '';
    $scope.molnbashojd = '';
    $scope.himmel = '';
    $scope.lufttryck = '';

    $scope.vader = function(temp, luftfuktighet, vindstyrka, molnbashojd, himmel, lufttryck) {
        $scope.temp = temp;
        $scope.luftfuktighet = luftfuktighet;
        $scope.vindstyrka = vindstyrka;
        $scope.molnbashojd = molnbashojd;
        $scope.himmel = himmel;
        $scope.lufttryck = lufttryck;
        var vaderinfo = {"temp" : temp, "airPressure" : lufttryck, "humidity" : 42, "windForce" : vindstyrka, "cloudBase" : molnbashojd, "okta" : himmel};
        var jsonObrj = JSON.stringify(vaderinfo);


        console.log(temp, luftfuktighet, vindstyrka, molnbashojd, himmel, lufttryck, vaderinfo, jsonObrj);
    };
});