var tasks = {};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var currentDay = moment().format("MMMM Do, YYYY");

console.log("currendDay");

$(".row").append(".container");

