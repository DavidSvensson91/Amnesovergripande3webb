/**
 * Created by Liz Dahlström on 2017-02-10.
 */

angular.module('myApp')
    .service('weatherService', ['$http', function ($http) {
        console.log('weather service initiated');
        var service = {};

        var apiUrl = 'http://10.8.1.209:8080/weather-info/'; // TODO: export to config file



        /*
        *  param weatherInfo should be a JSON object
        * */

        service.getAllWeatherInfo = getAllWeatherInfo;
        service.getAllWeatherInfoByStation = getAllWeatherInfoByStation;
        service.getWeatherInfoById = getWeatherInfoById;
        service.createWeatherInfo = createWeatherInfo;
        service.updateWeatherInfo = updateWeatherInfo;
        service.deleteWeatherInfo = deleteWeatherInfo;
        
        //Returning service with function calls
        return service;

        function getAllWeatherInfo() {
            return $http.get(apiUrl).then(handleSuccess, handleError('Error getting test tokens'));
        }
        function getAllWeatherInfoByStation(weatherStationId){
            return $http.get(apiUrl+weatherStationId + '/weather-info/')
        }

        function getWeatherInfoById(weatherId) {
            return $http.get(apiUrl + weatherId).then(handleSuccess, handleError('Error getting test token'));
        }

        function createWeatherInfo(weatherInfo) {
            return $http.post(apiUrl + weatherStationId + '/weather-info/', weatherInfo).then(handleSuccess, handleError('Error creating test access'));
        }

        function updateWeatherInfo(weatherInfo) {
            return $http.put(apiUrl, weatherInfo).then(handleSuccess, handleError('Error updating test'));
        }

        function deleteWeatherInfo(weatherid) {
            return $http.delete(apiUrl + weatherid).then(handleSuccess, handleError('Error deleting test'));
        }

        var handleSuccess = function (response) {
            console.log('Request successfully executed..');
            console.log(response.data);
        };

        var handleError = function (string) {
            console.log(string);
        }

    }]);