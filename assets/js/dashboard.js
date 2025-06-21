// dashboard.js

function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}



// Task management
let tasks = [];

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText !== '') {
    const task = {
      id: Date.now(),
      text: taskText,
      completed: false
    };
    tasks.unshift(task);
    input.value = '';
    renderTasks();
    renderRecentTasks();
  }
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})" />
        <button onclick="deleteTask(${task.id})">❌</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function renderRecentTasks() {
  const recentList = document.getElementById('recentTaskList');
  recentList.innerHTML = '';
  tasks.slice(0, 5).forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    recentList.appendChild(li);
  });
}

function toggleTask(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  renderTasks();
  renderRecentTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
  renderRecentTasks();
}

// Planner management
function addPlan() {
  const title = document.getElementById('planTitle').value;
  const date = document.getElementById('planDate').value;
  const priority = document.getElementById('planPriority').value;
  const list = document.getElementById('planList');

  if (title && date && priority) {
    const planDiv = document.createElement('div');
    planDiv.innerHTML = `<input type="checkbox" /> <strong>${title}</strong> - ${date} [${priority}]`;
    list.appendChild(planDiv);

    document.getElementById('planTitle').value = '';
    document.getElementById('planDate').value = '';
    document.getElementById('planPriority').selectedIndex = 0;
  }
}

// Clock
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  clock.textContent = `Current time: ${timeString}`;
}
setInterval(updateClock, 1000);
updateClock();
