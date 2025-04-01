// Define the AngularJS application
var app = angular.module("studentApp", []);

// Define the controller
app.controller("StudentController", function($scope) {
    // Initialize an empty array to store student records
    $scope.students = [];

    // Function to add a new student
    $scope.addStudent = function() {
        // Push the student object to the students array
        $scope.students.push({
            name: $scope.student.name,
            age: $scope.student.age,
            grade: $scope.student.grade
        });

        // Clear the input fields
        $scope.student = {};
    };

    // Function to remove a student
    $scope.removeStudent = function(index) {
        $scope.students.splice(index, 1);
    };
});
