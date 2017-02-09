var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", { templateUrl: "frontpage.html" })
        .when("/vaderdata", { templateUrl: "vaderdata.html" })
        .when("/addstation", { template: "<h1>Main</h1><p>Click on the links to change this content</p>" })
        .when("/deletedata", { template: "<h1>Main</h1><p>Click on the links to change this content</p>" });
});