/**
 * Created by JRW on 2017-02-14.
 */
angular.module('myApp')
    .service('user-service', ['$http', function ($http) {
        console.log('user service initiated');
        var service = {};

        var apiUrl = 'http://localhost/user/'; // TODO: export to config file


        /*
         *  param weatherInfo should be a JSON object
         * */

        service.getAllWeatherInfo = getuserinfo();
        //Returning service with function calls
        return service;

        function getuserinfo() {
            //TODO: GET through api
            return $http.get(apiUrl).then(handleSuccess, handleError('Error getting test tokens'));
        }

        var handleSuccess = function () {
            console.log('Request successfully executed..');
        };

        var handleError = function (string) {
            //TODO: use loginerror as error prompt
            console.log(string);
        }

    }]);