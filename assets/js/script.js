var tasks = [];

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
}

$(".container #textContainer").on("click", function() {
    var text = $(this).text();
    var textInput = $("<textarea>")
    .addClass("form-control col-10 text-light bg-secondary mb-2 p-4")
    .val(text);

    $(this).replaceWith(textInput);
    tasks.push({
        text: $(textInput)
    });
});

$(".container #save-button").on("click", function() {
    saveTasks();
});

loadTasks();