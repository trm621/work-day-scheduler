var loadTasks = function() {
    eightOclock = localStorage.getItem("eightAm")
    $("#eightAm").siblings("textArea").val(eightOclock);

    nineOclock = localStorage.getItem("nineAm")
    $("#nineAm").siblings("textArea").val(nineOclock);

    tenOclock = localStorage.getItem("tenAm")
    $("#tenAm").siblings("textArea").val(tenOclock);

    elevenOclock = localStorage.getItem("elevenAm")
    $("#elevenAm").siblings("textArea").val(elevenOclock);

    twelveOclock = localStorage.getItem("twelvePm")
    $("#twelvePm").siblings("textArea").val(twelveOclock);

    oneOclock = localStorage.getItem("onePm")
    $("#onePm").siblings("textArea").val(oneOclock);

    twoOclock = localStorage.getItem("twoPm")
    $("#twoPm").siblings("textArea").val(twoOclock);

    threeOclock = localStorage.getItem("threePm")
    $("#threePm").siblings("textArea").val(threeOclock);
    
    fourOclock = localStorage.getItem("fourPm")
    $("#fourPm").siblings("textArea").val(fourOclock);

    fiveOclock = localStorage.getItem("fivePm")
    $("#fivePm").siblings("textArea").val(fiveOclock);
};

var auditTask = function(tasks) {
}

$(".save-button").on("click", function() {
    var textAreaVal = $(this).siblings("textarea").val().trim();
    var textAreaId = $(this).attr("id").trim();
    localStorage.setItem("" + textAreaId, textAreaVal);
});

loadTasks();
