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

var beginningOfWorkDay = moment().hour(8);

var auditTasks = function() {
//     var a = (moment().hour())
//     if (a < moment().hour()) {
//         $(".textContainer").addClass("bg-success");
//     };

// };

var currentTime = moment();
    
    if (currentTime === moment().isAfter(hours(8))) {
        $("#eightAm").siblings("textarea").addClass("bg-success");
    }

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

auditTasks();

