// Массив для хранения задач
let tasks = [];

// Функция для добавления новой задачи
function addNewTask(title, description, state) {
  console.log('Add!');
  const newTask = {
    title: title,
    description: description,
    state: state,
    date: new Date().toISOString(), // Устанавливаем дату только для новых задач
  };

  tasks.push(newTask);
  displayTasks();
  saveTasksToLocalStorage();
}

// Функция для удаления задачи
function deleteTask(task) {
  if (confirm('Вы уверены, что хотите удалить задачу?')) {
    tasks = tasks.filter((t) => t !== task);
    displayTasks();
    saveTasksToLocalStorage();
  }
}
