var tasks = {};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

$(".row").append(".container");

