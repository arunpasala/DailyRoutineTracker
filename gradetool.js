// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const progressPercentage = document.getElementById('progressPercentage');
const progressFill = document.querySelector('.progress-fill');

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
updateUI();

// Add a new task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ text: taskText, completed: false });
    saveTasks();
    updateUI();
    taskInput.value = '';
  }
});

// Mark task as completed or uncompleted
taskList.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const index = e.target.getAttribute('data-index');
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    updateUI();
  }
});

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update the UI
function updateUI() {
  // Clear task list
  taskList.innerHTML = '';

  // Render tasks
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    li.setAttribute('data-index', index);
    if (task.completed) {
      li.classList.add('completed');
    }
    taskList.appendChild(li);
  });

  // Update progress
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = tasks.length ? (completedTasks / tasks.length) * 100 : 0;
  progressPercentage.textContent = `${progress.toFixed(0)}%`;
  progressFill.style.width = `${progress}%`;
}
