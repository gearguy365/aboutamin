// var myApp = angular.module('todoApp', ['ngAnimate', 'ui.bootstrap']);
// var myApp = angular.module('todoApp', ["ngMaterial", "materialCalendar"]);
var myApp = angular.module('todoApp', ["ngMaterial"]);

myApp.controller('TodoListController', function($scope, $http, AppointmentService) {
    $scope.message = 'hello world';
    $scope.appointment = {};
    $scope.isLoading = false;

    function someLongRunningFunc(callBack) {
        $http.get("http://localhost:8000/appointments/").then(function(response) {
            console.log(response);
            callBack(response);
            //return response;
        }, function(response) {
            console.log(response);
        });
    }
    $scope.cards = [{
        id: 1,
        isclicked: false
    }, {
        id: 2,
        isclicked: false
    }];
    $scope.changeCardColor = function(card) {
        card.selected = !card.selected;
    }

    $scope.submitAppointment = function() {
        $scope.isLoading = true;
        someLongRunningFunc(function(response) {
            $scope.appointments = response.data;
            $scope.isLoading = false;
        });
    }

    $scope.changeDayList = function() {
        $scope.disabledDays = {
            1: true,
            2: true
        };
    }

    $scope.disabledDaysForOctober = {
        5: true,
        10: true,
        15: true
    }

    $scope.disabledDays = {
        1: true
    };
    var today = new Date();
    $scope.thisMonth = today.getMonth();
    $scope.thisYear = today.getFullYear();
    console.log($scope.thisMonth);
    console.log($scope.thisYear);
    $scope.dayFormat = "d";
    // To select a single date, make sure the ngModel is not an array.
    $scope.selectedDate = null;

    // If you want multi-date select, initialize it as an array.
    $scope.selectedDate = [];

    $scope.firstDayOfWeek = 0; // First day of the week, 0 for Sunday, 1 for Monday, etc.
    $scope.setDirection = function(direction) {
        $scope.direction = direction;
        $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    $scope.dayClick = function(date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };

    $scope.prevMonth = function(data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function(data) {
        if(data.month == '10') {
            $scope.disabledDays = $scope.disabledDaysForOctober;
        }
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;
    $scope.setDayContent = function(date) {

        // You would inject any HTML you wanted for
        // that particular date here.
        return "<p></p>";

        // You could also use an $http function directly.
        return $http.get("/some/external/api");

        // You could also use a promise.
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve("<p></p>");
        }, 1000);
        return deferred.promise;

    };
});
myApp.controller('cvController', function () {

});
