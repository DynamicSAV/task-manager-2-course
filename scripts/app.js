// Функция для отображения задач
function displayTasks(filteredTasks) {
  const taskList = document.querySelector('.task-list');
  taskList.innerHTML = '';

  const tasksToDisplay = filteredTasks || tasks;

  tasksToDisplay.forEach((task) => {
    const newTask = createTaskElement(task);
    taskList.appendChild(newTask);
  });
}

function formatDateTime(date) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Date(date).toLocaleDateString(undefined, options);
}

// Функция для создания элемента задачи
function createTaskElement(task) {
  console.log(task.date);
  const taskElement = document.createElement('div');
  taskElement.classList.add('task', task.state);
  taskElement.dataset.state = task.state;
  taskElement.innerHTML = `
  <div class="task-card">
  <h2 class="task-title">${task.title}</h2>
  <div class="divider"></div>
  <div class="task-state">${getStateText(task.state)}</div>
  <div class="task-date">Добавлен: ${formatDateTime(task.date)}</div>
  <textarea class="task-description">${task.description}</textarea>
  <div class="task-buttons">
    <button class="edit-btn">Редактировать</button>
    <button class="delete-btn">Удалить</button>
  </div>
</div>
  `;

  // Обработчик для кнопки "Edit" в карточке задачи
  const editButton = taskElement.querySelector('.edit-btn');
  editButton.addEventListener('click', function () {
    showEditTaskModal(task);
  });

  // Обработчик для кнопки "Delete" в карточке задачи
  const deleteButton = taskElement.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function () {
    deleteTask(task);
  });

  return taskElement;
}
// Функция для отображения текстового состояния карточки
function getStateText(state) {
  switch (state) {
    case 'todo':
      return 'Надо сделать';
    case 'in-progress':
      return 'В процессе';
    case 'completed':
      return 'Завершено';
    default:
      return '';
  }
}
// Функция для отображения модального окна
function showModal(modal) {
  modal.classList.add('active');
}
// Функция для скрытия модального окна
function hideModal(modal) {
  modal.classList.remove('active');
}
// Обработчик для кнопки "Add Task"
const addTaskButton = document.querySelector('.add-task-btn');
addTaskButton.addEventListener('click', function () {
  showAddTaskModal();
});

// Function to show the modal for adding tasks
function showAddTaskModal() {
  const addTaskModal = document.querySelector('.add-task-modal');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  const addTitleInput = document.getElementById('modal-task-title');
  const addDescriptionInput = document.getElementById('modal-task-description');
  const addStateSelect = document.getElementById('modal-task-state');

  addTitleInput.value = '';
  addDescriptionInput.value = '';
  addStateSelect.value = 'todo';

  if (addTaskModal && modalBackdrop) {
    showModal(addTaskModal);
    showModal(modalBackdrop);

    // Remove previous event listeners to prevent duplication
    const saveButton = addTaskModal.querySelector('.save-btn');
    saveButton.removeEventListener('click', onSaveButtonClick);
    const cancelButton = addTaskModal.querySelector('.cancel-btn');
    cancelButton.removeEventListener('click', onCancelButtonClick);

    // Add event listeners to the buttons in the modal
    saveButton.addEventListener('click', onSaveButtonClick);
    cancelButton.addEventListener('click', onCancelButtonClick);
  }
}

// Event listener for the "Save" button in the modal
function onSaveButtonClick() {
  const addTitleInput = document.getElementById('modal-task-title');
  const addDescriptionInput = document.getElementById('modal-task-description');
  const addStateSelect = document.getElementById('modal-task-state');

  const title = addTitleInput.value;
  const description = addDescriptionInput.value;
  const state = addStateSelect.value;

  if (title.trim() !== '' && description.trim() !== '') {
    addNewTask(title, description, state);
    hideModal(document.querySelector('.add-task-modal'));
    hideModal(document.querySelector('.modal-backdrop'));
  }
}

// Event listener for the "Cancel" button in the modal
function onCancelButtonClick() {
  hideModal(document.querySelector('.add-task-modal'));
  hideModal(document.querySelector('.modal-backdrop'));
}
// Функция для скрытия модального окна добавления задачи
function hideAddTaskModal() {
  const addTaskModal = document.querySelector('.add-task-modal');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  hideModal(addTaskModal);
  hideModal(modalBackdrop);
}
