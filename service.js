myApp.service('AppointmentService', function ($http) {
    function createAppointment(appointmentObj) {
        debugger;
        $http.post(
            "http://localhost:8000/appointments/create/",
            {
                'Name' : appointmentObj.name,
                'DropOfDateTime' : appointmentObj.dropoffdatetime,
                'PickUpDateTime' : appointmentObj.PickUpDateTime
            }
        ).then(function (response) {
            return response;
        }, function (response) {
            return response;
        });
    }

    this.createAppointment = createAppointment;
});
