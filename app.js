$(document).ready(function(){
    $("#somebutton").click(function(){
        console.log('clicked');
        $.get("http://localhost:8000/appointments/", function(data, status){
            console.log(data);
       });
    });

    $("#somebutton2").click(function(){
        $.post("http://localhost:8000/appointments/create/",
        {
            name: "Donald Duck",
            city: "Duckburg"
        },
        function(data, status){
            console.log(data);
        });
    });
});
