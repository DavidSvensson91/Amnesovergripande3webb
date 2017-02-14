var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            { templateUrl: 'partials/frontpage.html' })
        .when('/vaderdata',
            { templateUrl: 'partials/vaderdata.html' })
        .when('/addstation', 
            { templateUrl: "partials/addStation.html" })
        .when('/deletedata', 
            { templateUrl: "partials/deleteData.html" })
        .when('/login',
            { templateUrl: "partials/Nmhi-login.html" })
        .when('/searchweather',
            { templateUrl: "partials/searchWeather.html" });
});