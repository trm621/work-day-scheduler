// upon loading the page, any items in the localstorage will persist on the page

var loadTasks = function() {
    eightOclock = localStorage.getItem("eightAm")
    $("#eightAm").siblings("textarea").val(eightOclock);

    nineOclock = localStorage.getItem("nineAm")
    $("#nineAm").siblings("textarea").val(nineOclock);

    tenOclock = localStorage.getItem("tenAm")
    $("#tenAm").siblings("textarea").val(tenOclock);

    elevenOclock = localStorage.getItem("elevenAm")
    $("#elevenAm").siblings("textarea").val(elevenOclock);

    twelveOclock = localStorage.getItem("twelvePm")
    $("#twelvePm").siblings("textarea").val(twelveOclock);

    oneOclock = localStorage.getItem("onePm")
    $("#onePm").siblings("textarea").val(oneOclock);

    twoOclock = localStorage.getItem("twoPm")
    $("#twoPm").siblings("textarea").val(twoOclock);

    threeOclock = localStorage.getItem("threePm")
    $("#threePm").siblings("textarea").val(threeOclock);
    
    fourOclock = localStorage.getItem("fourPm")
    $("#fourPm").siblings("textarea").val(fourOclock);

    fiveOclock = localStorage.getItem("fivePm")
    $("#fivePm").siblings("textarea").val(fiveOclock);
};

// will cycle through each task and assign a color to it depending on the time of day

var auditTasks = function() {
moment();
    var a = moment().hours();

if (moment().hour === 8) {
        $("#eightAm").siblings("textarea").addClass("bg-danger");
    }
    else if (a > 8) {
        $("#eightAm").siblings("textarea").addClass("bg-success")
    }
    else
        $("#eightAm").siblings("textarea").addClass("bg-dark");
        
if (moment() === 9) {
        $("#nineAm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < 9) {
        $("#nineAm").siblings("textarea").addClass("bg-success");
    }
    else 
        $("#nineAm").siblings("textarea").addClass("bg-dark");
    
if (a === 10) {
        $("#tenAm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < 10) {
        $("#tenAm").siblings("textarea").addClass("bg-success");
    }
    else
        $("#tenAm").siblings("textarea").addClass("bg-dark");
    
    
if (a = moment().hours(11)) {
        $("#elevenAm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < moment().hours(11)) {
        $("#elevenAm").siblings("textarea").addClass("bg-dark");
    }
    else if (a > moment().hours(11)) {
        $("#elevenAm").siblings("textarea").addClass("bg-success")
    };
    
if (a = moment().hours(12)) {
        $("#twelvePm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < moment().hours(12)) {
        $("#twelvePm").siblings("textarea").addClass("bg-dark");
    }
    else if (a > moment().hours(12)) {
        $("#twelvePm").siblings("textarea").addClass("bg-success")
    };
    
if (a = moment().hours(13)) {
        $("#onePm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < moment().hours(13)) {
        $("#onePm").siblings("textarea").addClass("bg-dark");
    }
    else if (a > moment().hours(13)) {
        $("#onePm").siblings("textarea").addClass("bg-success")
    };
    
if (a = moment().hours(14)) {
        $("#twoPm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < moment().hours(14)) {
        $("#twoPm").siblings("textarea").addClass("bg-dark");
    }
    else if (a > moment().hours(14)) {
        $("#twoPm").siblings("textarea").addClass("bg-success")
    };
    
if (a = moment().hours(15)) {
        $("#threePm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < moment().hours(15)) {
        $("#threePm").siblings("textarea").addClass("bg-dark");
    }
    else if (a > moment().hours(15)) {
        $("#threePm").siblings("textarea").addClass("bg-success")
    };
    
if (a = moment().hours(16)) {
        $("#fourPm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < moment().hours(16)) {
        $("#fourPm").siblings("textarea").addClass("bg-dark");
    }
    else if (a > moment().hours(16)) {
        $("#fourPm").siblings("textarea").addClass("bg-success")
    };
    
if (a = moment().hours(17)) {
        $("#fivePm").siblings("textarea").addClass("bg-danger");
    } 
    if (a < moment().hours(17)) {
        $("#fivePm").siblings("textarea").addClass("bg-dark");
    }
    else if (a > moment().hours(17)) {
        $("#fivePm").siblings("textarea").addClass("bg-success")
    };
};

// when this button is clicked, the calendar will clear and the localStorage will be emptied

$("#clearButton").on("click", function() {
    localStorage.clear();
    $(".save-button").siblings("textarea").val("");
});

// when the blue lock button is clicked, the task will persistently save to its corresponding time slot 

$(".save-button").on("click", function() {
    var textAreaVal = $(this).siblings("textarea").val().trim();
    var textAreaId = $(this).attr("id").trim();
    localStorage.setItem("" + textAreaId, textAreaVal);
});

// will display the current date

$("#currentDay").append("Today is " + moment().format("dddd, MMMM Do YYYY") + ".");

loadTasks();

setInterval(function() {
    auditTasks();
}, 100); 


