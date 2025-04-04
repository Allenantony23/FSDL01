angular.module('studentApp', [])
.controller('StudentController', function() {
    var ctrl = this;
    
    // Sample initial data
    ctrl.students = [
        { name: 'Allen Antony', age: 19, grade: 'A' },
        { name: 'Amal Benny', age: 19, grade: 'B' },
        { name: 'Aditya Angaj', age: 19, grade: 'A-' }
    ];
    
    // Initialize current student object
    ctrl.currentStudent = {};
    ctrl.isEditing = false;
    
    // Add or Update student
    ctrl.submitStudent = function() {
        if (ctrl.isEditing) {
            // Find and update the student
            var index = ctrl.students.findIndex(function(s) {
                return s === ctrl.editedStudent;
            });
            if (index !== -1) {
                ctrl.students[index] = angular.copy(ctrl.currentStudent);
            }
        } else {
            // Add new student
            ctrl.students.push(angular.copy(ctrl.currentStudent));
        }
        
        // Reset form
        ctrl.resetForm();
    };
    
    // Edit student
    ctrl.editStudent = function(student) {
        ctrl.currentStudent = angular.copy(student);
        ctrl.editedStudent = student;
        ctrl.isEditing = true;
    };
    
    // Delete student
    ctrl.deleteStudent = function(student) {
        if (confirm('Are you sure you want to delete ' + student.name + '?')) {
            var index = ctrl.students.indexOf(student);
            if (index !== -1) {
                ctrl.students.splice(index, 1);
            }
        }
    };
    
    // Reset form
    ctrl.resetForm = function() {
        ctrl.currentStudent = {};
        ctrl.editedStudent = null;
        ctrl.isEditing = false;
    };
});