let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = document.getElementById("task-list");

addButton.addEventListener("click", function() {
    let task = taskInput.value;
    let li = document.createElement("li");
    li.innerHTML = task;
    taskList.appendChild(li);
    taskInput.value = "";
});
