const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemsCount = 0;
let uncheck = 0;

function addTodo() {
  itemsCount ++;
  uncheck ++;

  const nuevaTarea = prompt("Ingrese nueva tarea");

  const li = document.createElement('li');
    li.className = 'row todo-container'

  const nuevoCheck = document.createElement('input');
    nuevoCheck.type = "checkbox";
    nuevoCheck.className = classNames.TODO_CHECKBOX;
    nuevoCheck.onchange = togglebox;

  const span = document.createElement('span');
    span.className = classNames.TODO_TEXT;
    span.innerHTML = (`${itemsCount}  -  ${nuevaTarea}`);
    span.className = 'col-md-6 margin-auto'

  const div = document.createElement('div');
    div.className = "checkbox checkbox-slider--b-flat checkbox-slider-md col-md-6 left";

  const label = document.createElement('label');

  div.appendChild(label);
  
  label.appendChild(nuevoCheck);
  label.appendChild(document.createElement('span'))

  list.appendChild(li);
  li.appendChild(span);

  li.appendChild(div);
  
  itemCountSpan.innerHTML = itemsCount;
  uncheckedCountSpan.innerHTML = uncheck;
}

function togglebox(event) {
  if (event.target.checked) {
    uncheck --;
  }
  else{
    uncheck ++;
  }

  uncheckedCountSpan.innerHTML = uncheck;
}