$(function() {
    printClassList();
    $("#class").click(function(event) {
        $("#header").html("Klassen");
        $("#tableSelector").html("Klassen");
        printClassList();
    });
    $("#teachers").click(function(event) {
        $("#header").html("Lehrer");
        $("#tableSelector").html("Lehrer");
        printTeacherList();
    });
    $("#rooms").click(function(event) {
        $("#header").html("Räume");
        $("#tableSelector").html("Räume");
        printRoomList();
    });

    displayDate();
    $('body').click(function(event) {
        displayDate();
    });

});

function displayDate() {
    var day = $('[data-toggle="datepicker"]').datepicker('getDayName', true, true);
    var date = $('[data-toggle="datepicker"]').datepicker('getDate');

    switch (day) {
        case "Mo":
            var res = new Date();
            $('#monday').html($.format.date(date, "dd.MM"));
            res.setDate(date.getDate() + 1);
            $('#thuesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#wendnesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thursday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#friday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#saturday').html($.format.date(res, "dd.MM"));
            break;
        case "Di":
            var res = new Date();
            $('#thuesday').html($.format.date(date, "dd.MM"));
            res.setDate(date.getDate() + 1);
            $('#wendnesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thursday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#friday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#saturday').html($.format.date(res, "dd.MM"));

            res.setDate(date.getDate() - 1);
            $('#monday').html($.format.date(res, "dd.MM"));
            break;
        case "Mi":
            var res = new Date();

            $('#wendnesday').html($.format.date(date, "dd.MM"));
            res.setDate(date.getDate() + 1);
            $('#thursday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#friday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#saturday').html($.format.date(res, "dd.MM"));

            res.setDate(date.getDate() - 2);
            $('#monday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thuesday').html($.format.date(res, "dd.MM"));
            break;
        case "Do":
            var res = new Date();

            $('#thursday').html($.format.date(date, "dd.MM"));
            res.setDate(date.getDate() + 1);
            $('#friday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#saturday').html($.format.date(res, "dd.MM"));

            res.setDate(date.getDate() - 3);
            $('#monday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thuesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#wendnesday').html($.format.date(res, "dd.MM"));
            break;
        case "Fr":
            var res = new Date();

            $('#friday').html($.format.date(date, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#saturday').html($.format.date(res, "dd.MM"));

            res.setDate(date.getDate() - 4);
            $('#monday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thuesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#wendnesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thursday').html($.format.date(res, "dd.MM"));
            break;
        case "Sa":
            var res = new Date();

            $('#saturday').html($.format.date(date, "dd.MM"));

            res.setDate(date.getDate() - 5);
            $('#monday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thuesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#wendnesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thursday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#friday').html($.format.date(res, "dd.MM"));
            break;
        case "So":
            var res = new Date();

            res.setDate(date.getDate() - 7);
            $('#monday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thuesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#wendnesday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#thursday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#friday').html($.format.date(res, "dd.MM"));
            res.setDate(res.getDate() + 1);
            $('#saturday').html($.format.date(res, "dd.MM"));
            break;
        default:

    }
}

function printRoomList() {
    $.ajax({
        method: "GET",
        crossDomain: true,
        dataType: 'json',
        url: "http://localhost:8080/api/room/all",
        beforeSend: function() {
            $("#allDataSelector").html("<span>Loading</span>");
        },
        success: function(data) {
            var output = "";
            $.each(data, function(id, obj) {
                output += "<span class='linkSelector'>" + obj.name + "</span> ";
            });
            $("#allDataSelector").html(output);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

function printTeacherList() {
    $.ajax({
        method: "GET",
        crossDomain: true,
        dataType: 'json',
        url: "http://localhost:8080/api/teacher/all",
        beforeSend: function() {
            $("#allDataSelector").html("<span>Loading</span>");
        },
        success: function(data) {
            var output = "";
            $.each(data, function(id, obj) {
                output += "<span class='linkSelector'>" + obj.name + "</span> ";
            });
            $("#allDataSelector").html(output);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}

function printClassList() {
    $.ajax({
        method: "GET",
        crossDomain: true,
        dataType: 'json',
        url: "http://localhost:8080/api/klasse/all",
        beforeSend: function() {
            $("#allDataSelector").html("<span>Loading</span>");
        },
        success: function(data) {
            var output = "";
            $.each(data, function(id, obj) {
                output += "<span class='linkSelector'>" + obj.name + "</span> ";
            });
            $("#allDataSelector").html(output);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR, textStatus, errorThrown);
        }
    });
}
