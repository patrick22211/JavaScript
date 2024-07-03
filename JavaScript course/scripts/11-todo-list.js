const todoList = ['make dinner', 'wash dishes'];

function renderTodoList() {
  let todoListHTML = ''

  for (let i = 0; i < todoList.length; i++){
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}




function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  let name = inputElement.value;
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

