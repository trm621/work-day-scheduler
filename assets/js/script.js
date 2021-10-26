var tasks = {};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

$(".container #textContainer").on("click", function() {
    var text = $(this).text();
    var textInput = $("<textarea>")
    .addClass("form-control col-10 text-light bg-secondary mb-2 p-5")
    .val(text);

    $(this).replaceWith(textInput);
});
