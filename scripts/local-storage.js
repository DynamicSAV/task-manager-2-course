// Функция для сохранения задач в локальное хранилище
function saveTasksToLocalStorage() {
  const tasksToSave = tasks.map((task) => ({
    title: task.title,
    description: task.description,
    state: task.state,
    date:
      task.date instanceof Date
        ? task.date.toISOString()
        : new Date().toISOString(),
  }));

  localStorage.setItem('tasks', JSON.stringify(tasksToSave));
}

// Функция для загрузки задач из локального хранилища
function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    const tasksToLoad = JSON.parse(storedTasks);
    tasks = tasksToLoad.map((task) => ({
      title: task.title,
      description: task.description,
      state: task.state,
      date: typeof task.date === 'string' ? new Date(task.date) : new Date(),
    }));
    displayTasks();
  }
}

// Инициализация страницы
loadTasksFromLocalStorage();
