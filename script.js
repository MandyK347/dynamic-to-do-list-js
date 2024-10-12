// wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve the value from the task input field and trim it
        const taskInput = document.getElementById('taskInput'); // Change 'taskInput' to your input field's ID
        const taskText = taskInput.value.trim();

        // Check if the input is not empty
        if (taskText === "") {
            alert("Please enter a task.");
        }  else {
             // Logic to add the task to the list (this part can be customized)
             console.log('Task added: ${taskText}'); // For demonstration, log the task
        }
        
        // Create a new list item element
        const listItem = document.createElement("li");
        // Set the text content of the the list item to taskTask
        listItem.textContent = taskText;

        // Create a new button element for removing the task
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        // Set the class name of the remove button to 'remove-btn'
        removeButton.className = "remove-btn";

        // Assign an onclick event to the remove button 
        removeButton.onclick = function() {
            taskList.removeChild(listItem);
        };

        // Append the remove button to the list item
        listItem.appendChild(removeButton);

        // Append the list item to the task list
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = "";
    }
    
    // Attach Event listeners
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});