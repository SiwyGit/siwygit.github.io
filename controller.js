var app = angular.module('divApp', []);
app.controller('divCtrl', function ($scope, $http) {
    $http.get('datatable1.json').success(function (data) {
        $scope.dividends = data.dividends2017;
    });
        
});