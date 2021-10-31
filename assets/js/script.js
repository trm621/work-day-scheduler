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

    console.log(a);

if (a === 8) {
        $("#eightAm").siblings("textarea").addClass("bg-danger");
    }
    else if (a < 8) {
        $("#eightAm").siblings("textarea").addClass("bg-success")
    }
    else
        $("#eightAm").siblings("textarea").addClass("bg-secondary");
        
if (a === 9) {
        $("#nineAm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 9) {
        $("#nineAm").siblings("textarea").addClass("bg-success");
    }
    else 
        $("#nineAm").siblings("textarea").addClass("bg-secondary");
    
if (a === 10) {
        $("#tenAm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 10) {
        $("#tenAm").siblings("textarea").addClass("bg-success");
    }
    else
        $("#tenAm").siblings("textarea").addClass("bg-secondary");
    
    
if (a === 11) {
        $("#elevenAm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 11) {
        $("#elevenAm").siblings("textarea").addClass("bg-success");
    }
    else 
        $("#elevenAm").siblings("textarea").addClass("bg-secondary");
    
if (a === 12) {
        $("#twelvePm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 12) {
        $("#twelvePm").siblings("textarea").addClass("bg-success");
    }
    else 
        $("#twelvePm").siblings("textarea").addClass("bg-secondary");
    
if (a === 13) {
        $("#onePm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 13) {
        $("#onePm").siblings("textarea").addClass("bg-success");
    }
    else  
        $("#onePm").siblings("textarea").addClass("bg-secondary");
    
if (a === 14) {
        $("#twoPm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 14) {
        $("#twoPm").siblings("textarea").addClass("bg-success");
    }
    else 
        $("#twoPm").siblings("textarea").addClass("bg-secondary");
    
if (a === 15) {
        $("#threePm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 15) {
        $("#threePm").siblings("textarea").addClass("bg-success");
    }
    else 
        $("#threePm").siblings("textarea").addClass("bg-secondary");
    
if (a === 16) {
        $("#fourPm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 16) {
        $("#fourPm").siblings("textarea").addClass("bg-success");
    }
    else
        $("#fourPm").siblings("textarea").addClass("bg-secondary");
    
if (a === 17) {
        $("#fivePm").siblings("textarea").addClass("bg-danger");
    } 
    else if (a < 17) {
        $("#fivePm").siblings("textarea").addClass("bg-success");
    }
    else 
        $("#fivePm").siblings("textarea").addClass("bg-secondary");
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

// will perform the auditTasks function every five minutes

setInterval(function() {
    auditTasks();
}, 300000); 


