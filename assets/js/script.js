var tasks = [];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".save-button").on("click", function() {
    var textAreaVal = $(this).siblings("textarea").val();
    var textAreaId = $(this).attr("id");
    var taskObj = {textAreaVal, textAreaId}
   tasks.push(taskObj);
   saveTasks(textAreaVal, textAreaId)
});

//loadTasks();
