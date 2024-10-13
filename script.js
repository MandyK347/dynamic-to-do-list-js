// wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //Load existing task from Local storage
    function loadTask () {
        const storedTask = JSON.parse(localStorage.getItem('task') || '[]');
        storedTask.forEach(taskText => addTaskToDOM(taskText, false)); // Load without saving again
    }


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
             // Add the task to the DOM and local Storage
             addTaskToDOM(taskText);
        }

        if (taskText !== '') {
             // Create a new li element
             const li = document.createElement("li");
             li.textContent = taskText;

              // Function to add a task to the DOM
              function addTaskToDOM(taskText, save = true) {
                  const li = document.createElement("li");
                  li.textContent = taskText;

             // Create a remove button
             const removeButton = document.createElement("button");
             removeButton.textContent = "Remove";
             removeButton.classList.add("remove-btn"); // Add class for styling or targeting

             // Assign onclick event to remove button 
             removeButton.onclick = function() {
                 taskList.removeChild(li); // Remove the li element
                removeTaskFromStorage(taskText); // Updated Local Storage
             };

             // Append the remove button to the li element
             li.appendChild(removeButton);

              // Append the li to the tasklist
              taskList.appendChild(li);

             // Save to Local Storage if necessary
             if (save) {
                saveTaskToStorage(taskText);
             }

             // Clear the task input field
             taskInput.value = "";
            }
        }  
    }       


    // Save a task to Local Storage
    function saveTaskToStorage(taskText) {
        const storedTask = JSON.parse(localStorage.getItem('task') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('task', JSON.stringify(storedTasks));
    }

    // Remove a task from Local Storage
    function removeTaskFromStorage(taskText) {
        const storedTask = JSON.parse(localStorage.getItem('task') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTask));
    }


    // Attach Event listeners
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing the "Enter" key
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Load task when the page loads
    loadTask();
});
       