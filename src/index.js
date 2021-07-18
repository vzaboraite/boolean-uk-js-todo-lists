/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/
/*
console.log("users: ", users);

console.log("todos: ", todos);
*/

// - Create an alert that lists all users, with their:
//   -- ids,
//   -- names,
//   -- what city they're from;
// - Prompt the user for a user id;
// - Display an alert with:
//   -- username,
//   -- all the todos titles that belong to that user.

// First exercise part for alert

// --start--

// initialize empty alert text
let alertUserList = "";

for (let i = 0; i < users.length; i++) {
  // get user object
  const user = users[i];
  // get user id, name, city
  const id = user.id;
  const name = user.name;
  const city = user.address.city;

  // initialize variable 'row' to display required user information
  const row = `ID: ${id} | Name: ${name} | City: ${city}\n`;
  // pass the 'row' to 'alertUserList'
  alertUserList += row;
}

alert(alertUserList);

// --end--

// Second exercise part for prompt

// --start--

// Loop to set prompt message
let userInput = `Who's todo list would you like to see?\n`;

for (let i = 0; i < users.length; i++) {
  // get user object
  const user = users[i];

  // get user's id and username
  const id = user.id;
  const username = user.username;

  // initialize row to display required user information for prompt
  const row = `Id: ${id} | ${username}\n`;
  // update userInput string
  userInput += row;
}

let selectedUserId = parseInt(prompt(`${userInput}\n(Please enter an Id)`));

// --end--

// Third exercise part is to display an alert

// --start--

// First loop is to set selectedUser object
let selectedUser = {};

for (let i = 0; i < users.length; i++) {
  // get user object
  const user = users[i];

  /* if user id from original array is equal to selected id from prompt,
   then update selectedUser object*/
  if (user.id === selectedUserId) {
    selectedUser = user;
  }
}

/* Second loop is for extracting the todos/tasks for selectedUser 
and setting it to selectedUserTodos[] */
const selectedUserTodos = [];

for (let i = 0; i < todos.length; i++) {
  // get todo object
  const todo = todos[i];

  /* if selectedUserId is equal to userId in todos[], 
  then add selectedUser todo/task to selectedUserTodos[]. */
  if (selectedUserId === todo.userId) {
    selectedUserTodos.push(todo);
  }
}

// Third loop is to build alert with username and todos titles of that user
let userTodosAlert = `${selectedUser.username}'s todo list:\n`;

for (let i = 0; i < selectedUserTodos.length; i++) {
  // get selectedUserTodo object
  const selectedUserTodo = selectedUserTodos[i];

  userTodosAlert += `--${selectedUserTodo.title}\n`;
}

/* Challenge: Add options for user to select either from 
reading current todo list or creating a new todo task*/

const optionString =
  prompt(`Hello ${selectedUser.username}!\n\nWhat would you like to do?
1 - Read todo list
2 - Create new task
(Please type a number)`);

const selectedOption = parseInt(optionString);

if (selectedOption === 1) {
  alert(userTodosAlert);
} else if (selectedOption === 2) {
  // For loop to set id for created new todo task
  let newTodoId = 0;

  for (let i = 0; i < selectedUserTodos.length; i++) {
    // get userTodo object from selectedUserTodos[]
    const userTodo = selectedUserTodos[i];
    const currentTodoId = userTodo.id;
    if (currentTodoId >= newTodoId) {
      newTodoId = currentTodoId + 1;
    }
  }
  // create new todo object
  let newTodo = {};
  newTodo.userId = selectedUserId;
  newTodo.id = newTodoId;
  newTodo.title = prompt(`Type in what task you want to add:\n`);
  newTodo.completed = false;

  /* Add new task to selectedUserTodos[] */
  selectedUserTodos.push(newTodo);
  alert(
    `New task was added successfully:\nId: ${newTodoId} | ${newTodo.title}`
  );
}

// --end--
