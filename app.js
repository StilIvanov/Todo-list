const list = document.querySelector(".list");
const input = document.querySelector("input");

let todoInputValue = "";
let counter = 0;
let todoList = [];

function onInputChange(event) {
  todoInputValue = event.target.value;
}

function addList() {
  if (!todoInputValue) {
    return;
  }
  const task = {
    id: counter++,
    task: todoInputValue,
  };
  todoList.push(task);
  renderTodos();
  todoInputValue = "";
  input.value = "";
}

function deleteList(id) {
  todoList = todoList.filter((todo) => todo.id !== id);
  renderTodos();
}

function renderTodos() {
  list.innerHTML = todoList
    .map(
      (elem) => `<li>
  ${elem.task}
  <button class="todo__delete" onclick="deleteList(${elem.id})">
    x
  </button>
</li>`
    )
    .join("");
}

