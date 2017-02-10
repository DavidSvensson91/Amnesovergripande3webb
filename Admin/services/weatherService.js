/**
 * Created by Liz Dahlström on 2017-02-10.
 */

angular.module('myApp')
    .service('weather-service', ['$http', function ($http) {
        console.log('weather service initiated');
        var service = {};

        var apiUrl = 'http://localhost/weather-info/'; // TODO: export to config file


        /*
        *  param weatherInfo should be a JSON object
        * */

        service.getAllWeatherInfo = getAllWeatherInfo;
        service.getWeatherInfoById = getWeatherInfoById;
        service.createWeatherInfo = createWeatherInfo;
        service.updateWeatherInfo = updateWeatherInfo;
        service.deleteWeatherInfo = deleteWeatherInfo;
        //Returning service with function calls
        return service;

        function getAllWeatherInfo() {
            //TODO: GET through api
            return $http.get(apiUrl).then(handleSuccess, handleError('Error getting test tokens'));
        }

        function getWeatherInfoById(weatherInfo) {
            //TODO: GET through api
            return $http.get(apiUrl + weatherInfo.id).then(handleSuccess, handleError('Error getting test token'));
        }

        function createWeatherInfo(weatherInfo) {
            //TODO: POST through api
            return $http.post(apiUrl, weatherInfo).then(handleSuccess, handleError('Error creating test access'));
        }

        function updateWeatherInfo(weatherInfo) {
            //TODO: UPDATE through api
            return $http.put(apiUrl  + weatherInfo.id, weatherInfo).then(handleSuccess, handleError('Error updating test'));
        }

        function deleteWeatherInfo(weatherInfo) {
            //TODO: DELETE through api
            return $http.delete(apiUrl + weatherInfo.id, weatherInfo).then(handleSuccess, handleError('Error deleting test'));
        }

        var handleSuccess = function () {
            console.log('Request successfully executed..');
        };

        var handleError = function (string) {
            console.log(string);
        }

    }]);