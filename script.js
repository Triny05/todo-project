function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "❌";
    btn.onclick = function () {
        li.remove();
        saveTasks();
    };

    li.appendChild(span);
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

    saveTasks();
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("li span").forEach(function (item) {
        tasks.push(item.innerText);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task) {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerText = task;

        let btn = document.createElement("button");
        btn.innerText = "❌";
        btn.onclick = function () {
            li.remove();
            saveTasks();
        };

        li.appendChild(span);
        li.appendChild(btn);

        document.getElementById("taskList").appendChild(li);
    });
}

window.onload = loadTasks;