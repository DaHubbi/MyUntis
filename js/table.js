$(function() {
    $("#class").click(function(event) {
        $("#header").html("Klassen");
        $("#tableSelector").html("Klassen");
    });
    $("#teachers").click(function(event) {
        $("#header").html("Lehrer");
        $("#tableSelector").html("Lehrer");
    });
    $("#rooms").click(function(event) {
        $("#header").html("Räume");
        $("#tableSelector").html("Räume");
    });

    $('[data-toggle="datepicker"]').datepicker({
        autoPick: 'true',
        language: 'de-DE'
    });

});