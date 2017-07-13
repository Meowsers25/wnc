var todos = ['item 1', 'item 2', 'item 3'];

todos.push('item 4');

todos.push('item 5');


// function displayTodos() {
//     console.log('My todos: ' + todos);
// }

// displayTodos();

function changeTodo(position, newValue) {
    todos[position] = newValue;
    console.log(todos);
}

changeTodo(0, 'New A');