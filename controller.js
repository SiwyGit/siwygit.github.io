var app = angular.module('divApp', ["ngRoute"]);
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    .when("/", {
        templateUrl : "table.html"
    })
    .when("/company/:companyID", {
        templateUrl : "company.html",
        controller : "compCtrl"
    });
});
app.controller('divCtrl', function ($scope, $http) {
    $http.get('datatable1.json').success(function (data) {
        $scope.dividends = data.dividends2017;
    });
});
app.controller('compCtrl', function ($scope, $routeParams, $http) {
    $http.get('datatable1.json').success(function (data) {
        $scope.dividend = data.dividends2017[$routeParams.companyID];
    });
});
