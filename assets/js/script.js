var tasks = [];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {
    localStorage.getItem("tasks");
    console.log(tasks);
};

var auditTask = function(taskObj) {

}

$(".save-button").on("click", function() {
    var textAreaVal = $(this).siblings("textarea").val();
    var textAreaId = $(this).attr("id");
   tasks.push({
       text: textAreaVal,
       time: textAreaId
   });
   saveTasks(textAreaVal, textAreaId)
});



loadTasks();
