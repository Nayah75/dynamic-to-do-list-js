// To-Do List Application JavaScript with Local Storage

// Array to store tasks
let tasks = [];

// Wait for DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    
    // Step 2: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    
    // Step 1: Load tasks from Local Storage when page loads
    loadTasks();
    
    // Step 3: Create the addTask Function with optional save parameter
    function addTask(save = true) {
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
        removeButton.classList.add('remove-btn');
        
        // Assign onclick event to remove button
        removeButton.onclick = function() {
            // Remove the li element from taskList
            taskList.removeChild(li);
            
            // Step 3: Remove task from tasks array
            const taskIndex = tasks.indexOf(taskText);
            if (taskIndex > -1) {
                tasks.splice(taskIndex, 1);
            }
            
            // Update Local Storage after removal
            saveTasks();
        };
        
        // Append the remove button to the li element
        li.appendChild(removeButton);
        
        // Append the li to taskList
        taskList.appendChild(li);
        
        // Step 2: Update Task Addition - Save to Local Storage if save is true
        if (save) {
            // Add task to tasks array
            tasks.push(taskText);
            
            // Save tasks array to Local Storage
            saveTasks();
        }
        
        // Clear the task input field
        taskInput.value = '';
    }
    
    // Step 5: Function to save tasks to Local Storage
    function saveTasks() {
        // Serialize tasks array to JSON and save to Local Storage
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    // Step 4: Function to load tasks from Local Storage
    function loadTasks() {
        // Retrieve tasks from Local Storage
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        
        // Populate the task list on the page
        storedTasks.forEach(taskText => {
            // Call addTask with save=false to avoid saving again
            taskInput.value = taskText;
            addTask(false);
        });
        
        // Update tasks array with loaded tasks
        tasks = storedTasks;
        
        // Clear input field after loading
        taskInput.value = '';
    }
    
    // Step 5: Attach Event Listeners
    
    // Add click event listener to addButton
    addButton.addEventListener('click', function() {
        addTask(true);
    });
    
    // Add keypress event listener to taskInput for Enter key
    taskInput.addEventListener('keypress', function(event) {
        // Check if the pressed key is Enter
        if (event.key === 'Enter') {
            addTask(true);
        }
    });
    
});

// End of To-Do List Application
