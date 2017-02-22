/**
 * Created by Liz Dahlström on 2017-02-10.
 */

angular.module('myApp')
    .service('weatherService', ['$http', function ($http) {
        console.log('weather service initiated');
        var service = {};

        var apiUrl = 'http://localhost:8080'; // TODO: export to config file

        var responses = '';

        var handleSuccess = function (response) {
            console.log('Request successfully executed..');
            // console.table(response.data);
            // console.log(responses);

                return response.data;
        };

        var handleError = function (string) {
            console.log(string);
        };


        /*
         *  param weatherInfo should be a JSON object
         * */

        service.getAllWeatherInfo = getAllWeatherInfo;
        service.getAllWeatherInfoByStation = getAllWeatherInfoByStation;
        service.getAllWeatherInfoWithoutStations = getAllWeatherInfoWithoutStations;
        service.getWeatherInfoById = getWeatherInfoById;
        service.createWeatherInfo = createWeatherInfo;
        service.updateWeatherInfo = updateWeatherInfo;
        service.deleteWeatherInfo = deleteWeatherInfo;
        service.deleteWeatherStation =deleteWeatherStation;
        service.createWeatherStation = createWeatherStation;
        service.updateWeatherStation = updateWeatherStation;

        //Returning service with function calls
        return service;

        function getAllWeatherInfo() {
            return $http.get(apiUrl + '/weather-station/').then(handleSuccess);
        }

        function getAllWeatherInfoWithoutStations() {
            var response = $http.get(apiUrl + '/weather-info/').then(function (response) {
                return response;
            });
            return response;
        }
        

        function getAllWeatherInfoByStation(weatherStationId) {
            return $http.get(apiUrl + '/weather-station/' + weatherStationId + '/weather-info/').then(handleSuccess);
        }

        function getWeatherInfoById(weatherId) {
            return $http.get(apiUrl + '/weather-info/' + weatherId + '/').then(handleSuccess);
        }

        function createWeatherInfo(weatherStationId,weatherInfo) {
            return $http.post(apiUrl+ '/weather-station/' + weatherStationId + '/weather-info/', weatherInfo).then(handleSuccess);
        }

        function updateWeatherInfo(weatherInfo,weatherStationId) {
            return $http.put(apiUrl + '/weather-info/', weatherInfo).then(handleSuccess);
        }

        function deleteWeatherInfo(weatherid) {
            return $http.delete(apiUrl + '/weather-info/' + weatherid + '/').then(handleSuccess);
        }
        function  deleteWeatherStation(weatherStationId) {
            return $http.delete(apiUrl + '/weather-station/' + weatherStationId +'/').then(handleSuccess);
        }
        function  createWeatherStation(weatherStation) {
            return $http.post(apiUrl + '/weather-station/',weatherStation).then(handleSuccess);
        }
        function updateWeatherStation(weatherStation){
            return $http.put(apiUrl + '/weather-station/',weatherStation).then(handleSuccess);
        }


    }]);