// Define the AngularJS application
var app = angular.module("helloApp", []);

// Define the controller
app.controller("HelloController", function($scope) {
    $scope.greeting = "Hello World!"; // Initialize greeting
    $scope.name = ""; // Initialize name for ng-model
});
