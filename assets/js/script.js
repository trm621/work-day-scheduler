var tempArr = [];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tempArr));
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    console.log(tasks);
    for (var i = 0; i < tasks.length; i++)
    if (tasks[i].time === eightAm) {
        textArea.append(eightAm)
    }
};

var auditTask = function(tasks) {
}

$(".save-button").on("click", function() {
    var textAreaVal = $(this).siblings("textarea").val().trim();
    var textAreaId = $(this).attr("id").trim();
   tempArr.push({
       text: textAreaVal,
       time: textAreaId
   });
   saveTasks(textAreaVal, textAreaId)
});

loadTasks();
