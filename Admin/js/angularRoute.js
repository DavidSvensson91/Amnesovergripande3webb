var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            { templateUrl: 'frontpage.html' })
        .when('/vaderdata',
            { templateUrl: 'vaderdata.html' })
        .when('/addstation', 
            { templateUrl: "addStation.html" })
        .when('/deletedata', 
            { templateUrl: "deleteData.html" })
        .when('/searchweather',
            { templateUrl: "searchWeather.html" });
});