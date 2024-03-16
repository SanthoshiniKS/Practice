function addTask() {
    var task= document.getElementById("task");
    var taskList = document.getElementById("taskList");

    if (task.value === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.textContent = task.value;
    taskList.appendChild(li);

    var deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick=function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    task.value = "";
}
