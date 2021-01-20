const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

function addTodo(event){
    event.preventDefault();
    const iVal = todoInput.value;
    if(iVal != ''){
        event.preventDefault();
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const todoLi = document.createElement('li');
        todoLi.innerText = iVal;
        todoLi.classList.add('list');
        todoDiv.appendChild(todoLi);
        todoInput.value = "";
        
        const checkButton = document.createElement('button');
        checkButton.innerHTML = '<i class="fas fa-check-square"></i>';
        checkButton.classList.add('checkbtn');
        todoDiv.appendChild(checkButton);
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
        deleteButton.classList.add('deletebtn');
        todoDiv.appendChild(deleteButton);
        
        todoList.appendChild(todoDiv);
    }
}

function deleteCheck(event){
    const selected = event.target;
    console.log(selected.classList);
    if(selected.classList[0] === 'deletebtn'){
        selected.parentElement.classList.add('deleted');
        selected.parentElement.addEventListener('transitionend',function(){
            selected.parentElement.remove();
        });
    }
    if(selected.classList[0] === 'checkbtn'){
        selected.parentElement.classList.toggle('completedTodo');
    }
}