//method for grabbing current time 
var currentDay = moment().format("dddd, MMMM");

//create hour time slots
var hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

// variables for each hour block
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);


//pull from local storage and store in vars

var plannerItem9 = JSON.parse(localStorage.getItem('hour9')) || "";
var plannerItem10 = JSON.parse(localStorage.getItem('hour10')) || "";
var plannerItem11 = JSON.parse(localStorage.getItem('hour11')) || "";
var plannerItem12 = JSON.parse(localStorage.getItem('hour12')) || "";
var plannerItem13 = JSON.parse(localStorage.getItem('hour13')) || "";
var plannerItem14 = JSON.parse(localStorage.getItem('hour14')) || "";
var plannerItem15 = JSON.parse(localStorage.getItem('hour15')) || "";
var plannerItem16 = JSON.parse(localStorage.getItem('hour16')) || "";
var plannerItem17 = JSON.parse(localStorage.getItem('hour17')) || "";

// make hour blocks anad pull data from local storage

$.each(hours, function(index, value) {
    plannerItem = [plannerItem9, plannerItem10, plannerItem11, plannerItem12, plannerItem13, plannerItem14, plannerItem15, plannerItem16, plannerItem17]
    //appending the items into html
    $(".container").append("<div class= 'row'><div class='col-2 hourtext-right' id='hour" + (index + 9) + "'><span>" + value.format("H A") + "</span></div><div class='col-8 event-group' id=' timeblock" + (index + 9) + "'><textarea class=' events col-12' id=' eventblock" + (index + 9) + "'>" + events[index]+ "</textarea></div>" +
    "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='save Event'></i> <i class='fas fa-trash' title='Remove Planner Item'></i></div></div></div>");
});

// Check what time it is to color blocks correctly

//check current time
var checkTime = function () {
    currentTime = moment().format("hh:mm:ss");

    //do a check of hour 9 (maybe replace isBetween with isSame)
    if (moment().isBetween(hour9, hour10)) {
        $("#timeblock9").addClass("present");
    }
    else if (moment().isAfter(hour10)) {
        $("#timeblock9").addClass("past");
    }
    else {
        $("timeblock9").addClass("future");
    }

    // check for hour 10
    if (moment().isBetween(hour10, hour11)) {
        $("#timeblock10").addClass("present");
    }
    else if (moment().isAfter(hour11)) {
        $("#timeblock10").addClass("past");
    }
    else {
        $("timeblock10").addClass("future");
    }

    //check for hour 11
    if (moment().isBetween(hour11, hour12)) {
        $("#timeblock11").addClass("present");
    }
    else if (moment().isAfter(hour12)) {
        $("#timeblock11").addClass("past");
    }
    else {
        $("timeblock11").addClass("future");
    }

    // check for hour 12 
    if (moment().isBetween(hour12, hour13)) {
        $("#timeblock12").addClass("present");
    }
    else if (moment().isAfter(hour13)) {
        $("#timeblock12").addClass("past");
    }
    else {
        $("timeblock12").addClass("future");
    }

    //check for hour 13
    if (moment().isBetween(hour13, hour14)) {
        $("#timeblock13").addClass("present");
    }
    else if (moment().isAfter(hour14)) {
        $("#timeblock13").addClass("past");
    }
    else {
        $("timeblock13").addClass("future");
    }

    //check for hour 14
    if (moment().isBetween(hour14, hour15)) {
        $("#timeblock14").addClass("present");
    }
    else if (moment().isAfter(hour15)) {
        $("#timeblock14").addClass("past");
    }
    else {
        $("timeblock14").addClass("future");
    }

    //check for hour 15
    if (moment().isBetween(hour15, hour16)) {
        $("#timeblock15").addClass("present");
    }
    else if (moment().isAfter(hour16)) {
        $("#timeblock15").addClass("past");
    }
    else {
        $("timeblock15").addClass("future");
    }

    //check for hour 16
    if (moment().isBetween(hour16, hour17)) {
        $("#timeblock16").addClass("present");
    }
    else if (moment().isAfter(hour17)) {
        $("#timeblock16").addClass("past");
    }
    else {
        $("timeblock16").addClass("future");
    }

    //check for hour 17 
    if (moment().isBetween(hour17, hour18)) {
        $("#timeblock17").addClass("present");
    }
    else if (moment().isAfter(hour18)) {
        $("#timeblock17").addClass("past");
    }
    else {
        $("timeblock17").addClass("future");
    };
}; 
