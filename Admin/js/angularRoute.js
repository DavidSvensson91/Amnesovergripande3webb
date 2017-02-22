var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {templateUrl: 'partials/frontpage.html'})
        .when('/vaderdata',
            {templateUrl: 'partials/vaderdata.html'})
        .when('/deletedata',
            {templateUrl: "partials/deleteData.html"})
});