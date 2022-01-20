const todoForm = document.querySelector("#todo_form");
const todoList = document.querySelector("#todo_list")
const todoInput = document.querySelector("#todo_form input")
let todos = [];
const TODOS_KEY = "todos"

function saveTodos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

function deleteTodo(e){
  // console.log(e.target.parentNode);
  const li = e.target.parentNode;
  // console.log(li.id);

  todos = todos.filter(eachTodo => {return eachTodo.id!==parseInt(li.id)});
  saveTodos();
  li.remove();
}

function paintTodo(newTodo){
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText="❎";
  button.addEventListener("click",deleteTodo);
  span.innerText = newTodo.text;
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  // todos.push(newTodo); //text로 저장. object형으로 저장하과싶다면?
  const newTodoObject = {
    text : newTodo,
    id : Date.now(),
  }
  todos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
}
todoForm.addEventListener("submit",handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY); //string
// console.log(savedTodos, typeof(savedTodos))
if (savedTodos !==null){
  const parsedTodos = JSON.parse(savedTodos); //object
  // console.log(parsedTodos, typeof(parsedTodos))

  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}







//
