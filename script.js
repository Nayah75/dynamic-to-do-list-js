// To-Do List Application JavaScript

// Wait for DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Step 3: Create the addTask Function
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();
        
        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task.');
            return; // Exit the function if empty
        }
        
        // Step 4: Task Creation and Removal
        
        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create a new button element for removing the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add = 'remove-btn';
        
        // Assign onclick event to remove button
        removeButton.onclick = function() {
            // Remove the li element from taskList
            taskList.removeChild(li);
        };
        
        // Append the remove button to the li element
        li.appendChild(removeButton);
        
        // Append the li to taskList
        taskList.appendChild(li);
        
        // Clear the task input field
        taskInput.value = '';
    }
    
    // Step 5: Attach Event Listeners
    
    // Add click event listener to addButton
    addButton.addEventListener('click', addTask);
    
    // Add keypress event listener to taskInput for Enter key
    taskInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is Enter
        if (event.key === 'Enter') {
            addTask();
        }
    });
    
});

// End of To-Do List Application
