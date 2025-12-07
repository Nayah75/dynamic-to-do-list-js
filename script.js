const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    // Create <li> and set text
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create "Remove" button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // Add click event to remove button
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to <li>, then <li> to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }
});
