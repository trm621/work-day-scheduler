var tasks = {};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".container #textContainer").on("click", function() {
    console.log("this was clicked!");
});
