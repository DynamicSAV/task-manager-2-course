function resetSearch() {
  const searchInput = document.getElementById('search-input');
  searchInput.value = '';
  displayTasks(tasks);
}

const searchButton = document.getElementById('search-input');
searchButton.addEventListener('input', function () {
  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput.value.trim().toLowerCase();

  if (searchQuery !== '') {
    const filteredTasks = tasks.filter((task) => {
      const title = task.title.toLowerCase();
      const description = task.description.toLowerCase();
      return title.includes(searchQuery) || description.includes(searchQuery);
    });

    displayTasks(filteredTasks);
    console.log('filter');
  } else {
    displayTasks(tasks); // Если поле пустое, отображаем все задачи
    console.log('no filter');
  }
});
