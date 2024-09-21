console.log('JS is sourced!');
startSqlToDoList();

//The 'Add' and 'Delete' buttons will go here. 

function submitButton(event) {
    event.preventDefault();

    console.log('Submit To-Do task clicked');

    let todos = {};
    let toDoItem = document.getElementById('todos').value
    addToDo(toDoItem);
}

function addToDo(toDoToAdd) {
axios({
    method: 'POST',
    url:'/todos',
    data: addToDo,
}).then(function(response) {
    console.log('addToDo()', response.data);
    refreshToDo();
}).catch(function(error) {
    console.log('Error in POST', error)
    alert('unable to add To-Do, please try again later.');
});

}





