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

        if (taskText !== '') {
             // Create a new li element
             const li = document.createElement("li");
             li.textContent = taskText;

             // Create a remove button
             const removeButton = document.createElement("button");
             removeButton.textContent = "Remove";
             removeButton.classList.add("remove-btn"); // Add class for styling or targeting

             // Assign onclick event to remove button 
             removeButton.onclick = function() {
                 taskList.removeChild(li); // Remove the li element
             };

             // Append the remove button to the li element
             li.appendChild(removeButton);

              // Append the li to the tasklist
              taskList.appendChild(li);

             // Clear the task input field
             taskInput.value = "";
        }     
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
       