const toDoForm = document.querySelector(".todo-form");
const toDoItemsList = document.querySelector(".todo-items");
const toDoInput = toDoForm.querySelector("input");
const TODOS_LS = "todos";
let todos = [];

function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
}

function deleteTodo(id) {
  todos = todos.filter(function (item) {
    return item.id != id;
  });
  addToLocalStorage(todos);
}

function loadToLocalStorage() {
  reference = localStorage.getItem("todos");
  if (reference) {
    todos = JSON.parse(reference);
    renderToDos(todos);
  }
}

function addToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderToDos(todos);
}

function clickcontrol(event) {
  if (event.target.type === "checkbox") {
    toggle(event.target.parentElement.getAttribute("data-key"));
  }

  if (event.target.classList.contains("delete-button")) {
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
}

function renderToDos(todos) {
  toDoItemsList.innerHTML = "";
  todos.forEach(function (item) {
    const checked = item.completed ? "checked" : null;
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("data-key", item.id);
    if (item.completed === true) {
      li.classList.add("checked");
    }

    li.innerHTML = `<input type="checkbox" class="checkbox" ${checked}> 
  ${item.name}
  <button class="delete-button">X</button>`;
    toDoItemsList.append(li);
  });

  toDoItemsList.addEventListener("click", clickcontrol);
}
function addToDo(item) {
  if (item !== "") {
    const todo = {
      id: Date.now(),
      name: item,
      completed: false,
    };
    todos.push(todo);
    addToLocalStorage(todos);
    toDoInput.value = "";
  }
}

function init() {
  loadToLocalStorage();
  toDoForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addToDo(toDoInput.value);
  });
}

init();
