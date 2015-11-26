/*global angular, console*/

function isEmptyString(str) {
    return !str || str.length === 0;
}

angular
    .module("todoApp", [])
    .controller("mainController", function($scope) {})
    .controller("newTaskController", function($scope) {
        
        $scope.newTask = {
            text: "",
            isReadyToBeAdded: function() {
                console.log('its text is ' + this.text);
                return !isEmptyString(this.text);
            },
            isFocused: false
        };
    });