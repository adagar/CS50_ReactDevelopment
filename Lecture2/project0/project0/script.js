const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let todoCount = 0;

function newTodo() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.innerHTML = "Done.";
  button.onClick = function(){
    console.log("Done!");
    this.parentElement.style.textDecoration = "line-through";
  }
  li.appendChild(document.createTextNode("Todo item #" + todoCount));
  li.appendChild(button);
  list.appendChild(li);

  todoCount++;

  document.getElementById("item-count").textContent = todoCount;
  
}
