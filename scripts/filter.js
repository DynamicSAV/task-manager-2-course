const taskFilter = document.getElementById('task-filter');
taskFilter.addEventListener('change', handleTaskFilter);

function handleTaskFilter() {
  const selectedState = taskFilter.value;
  const filteredTasks = filterTasksByState(selectedState);
  displayFilteredTasks(filteredTasks);
}

function filterTasksByState(state) {
  if (state === 'all') {
    return tasks;
  } else {
    return tasks.filter((task) => task.state === state);
  }
}

function displayFilteredTasks(filteredTasks) {
  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';

  filteredTasks.forEach((task) => {
    const newTask = createTaskElement(task);
    taskList.appendChild(newTask);
  });
}
