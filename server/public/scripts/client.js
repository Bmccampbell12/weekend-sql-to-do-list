console.log('JS is sourced!');
startSqlToDoList()

function startSqlToDoList() { //Event triggered upon page load.
axios.get ('/todos')
.then(function(response) {
    console.log('startSqlToDoList() response', response.data);
    renderToDo(response.data);
})
.catch(function(error) {
    console.log(`Error in 'GET' response`, error);
    });
}
//End startSqlToDoList

document.querySelector('form').onClick('submit', submitButton).value


// toDoTextInput.todos = document.getElementById('todos').value
// The 'Add' and 'Delete' buttons will go here. 
let submitButton = {};
//Event triggered by submittal of new task.
function submitButton(event) {    
    event.preventDefault();

    console.log('Submit To-Do task clicked');

    //let submitButton = {};    //gets value from input field.

      let toDoTextInput = document.querySelector('input[data-testid="toDoTextInput"]').value;
        // Adds newly created To-do to the database.
        if (!toDoTextInput) {
            alert("please enter task");
            return; 
        }
        //addToDo(toDoTextInput)

let toDoToAdd = {
    task: toDoTextInput,
    isComplete: false
}; 

// Sends new to-do to the server
addToDo(toDoToAdd);

document.querySelector('input[data-testid="toDoTextInput"]').value = '';
}

// Adds the new to item to the database
function addToDo(toDoItem) {
axios({
    method:'POST',
    url:'/todos',
    data: toDoItem,
}).then(function(response) {
    console.log('addToDo()', response.data);
    refreshToDo();
}).catch(function(error) {
    console.log(`Error in 'POST'`, error)
    alert('Unable to add To-Do, please try again later.');
  });
};
// startSqlToDoList will get all 'list items' from the server and render to the page
function startSqlToDoList() {
    axios({
        method: 'GET',
        url: '/todos',
        data: toDoTextInput,
    }).then(function(response) {
        console.log('startSqlToDoList() response', response.data);
        renderToDo(response.data);
    }).catch(function(error){
        console.log(`error in 'GET' response`, error);
    });
    }
// Displays an Array of To-do tasks to the DOM.
function renderToDo(todos) {
    const toDoList = document.getElementById('toDoList');
    toDoList.innerHTML = '';

    for(let i=0; i < todos.length; i += 1) {
        let todo = todos[i];

        // For each to-do, appends a new row to the table
        toDoList.innerHTML += `
            <li class="$todo.isComplete ? 'completed' : ''}">
            ${todo.task}
            <button onClick="completeToDo(${todo.id})" $todo.isComplete ? 'disabled' : ''}>
            complete
            </button>
            <button onClick="deleteToDo(${todo.id})">Delete</button>
            </li>
            `;
    }
}
function completeToDo(todoId) {
    axios({
        method: 'PUT',
        url: `/todos/${todoId}`,
        data: { isComplete: true }
    }).then(function(response) {
        refreshToDo(); //updates DOM to reflect changes
    }).catch(function(error) {
        console.log('Error in completing task', error);
    });
}

function deleteToDo(todosId) {
    axios.delete(`/todos/${todosId}`).then((response) => {
        refreshToDo()
    }).catch((error) =>{
        console.log('Error', error);
        alert('something went wrong');
    });
}
