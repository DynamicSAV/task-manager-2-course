// Функция для отображения модального окна редактирования задачи
function showEditTaskModal(task) {
  const editTaskModal = document.querySelector('.edit-task-modal');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  const editTitleInput = document.getElementById('edit-task-title');
  const editDescriptionInput = document.getElementById('edit-task-description');
  const editStateSelect = document.getElementById('edit-task-state');

  // Проверяем, существуют ли элементы модального окна перед установкой их значений
  if (
    editTaskModal &&
    editTitleInput &&
    editDescriptionInput &&
    editStateSelect
  ) {
    editTitleInput.value = task.title;
    editDescriptionInput.value = task.description;
    editStateSelect.value = task.state;

    showModal(editTaskModal);
    showModal(modalBackdrop);

    // Обработчик для кнопки "Save" в модальном окне
    const saveButton = editTaskModal.querySelector('.save-btn');
    saveButton.addEventListener('click', function () {
      const updatedTask = {
        title: editTitleInput.value,
        description: editDescriptionInput.value,
        state: editStateSelect.value,
        date: new Date().toISOString(),
      };

      // Находим индекс задачи в массиве tasks
      const index = tasks.findIndex((t) => t === task);
      if (index !== -1) {
        tasks[index] = updatedTask;
        displayTasks();
        saveTasksToLocalStorage();
      }

      hideModal(editTaskModal);
      hideModal(modalBackdrop);
    });

    // Обработчик для кнопки "Cancel" в модальном окне
    const cancelButton = editTaskModal.querySelector('.cancel-btn');
    cancelButton.addEventListener('click', function () {
      hideModal(editTaskModal);
      hideModal(modalBackdrop);
    });
  }
}
