var tasks = {};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}