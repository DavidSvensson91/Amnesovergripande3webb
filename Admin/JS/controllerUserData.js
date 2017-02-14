/**
 * Created by JRW on 2017-02-14.
 */
app.controller('userlogin',function($scope){
    $scope.username = '';
    $scope.password = '';

    $scope.user = function(username,password) {
        $scope.username = username;
        $scope.password = password;
        var userinfo = {"UserName" : temp, "Password" : temp};
        var jsonObrj = JSON.stringify(userinfo);


        console.log(username, password,userinfo, jsonObrj);
    };
});