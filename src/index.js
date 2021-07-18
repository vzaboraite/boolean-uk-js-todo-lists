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

/* Challenge2: add option to repeat or finish the program */
for (let programShouldWork = true; programShouldWork; ) {
  // Second exercise part for prompt

  // --start--

  // Loop to set prompt message
  let userInput = `Who's todo list would you like to see?\n\n`;

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

  /* Challenge2: Add options for user to select either to 
delete or update todo task. */

  const optionString =
    prompt(`Hello ${selectedUser.username}!\n\nWhat would you like to do?
1 - Read todo list
2 - Create new task
3 - Update task
4 - Delete completed task
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
  } else if (selectedOption === 3) {
    /* For loop to set the prompt to display user todo list with task id and title,
  that user could select*/
    let userTodoListWithIdString = `What task would you like to uptade?\n\n`;

    for (let i = 0; i < selectedUserTodos.length; i++) {
      const userTodo = selectedUserTodos[i];
      const id = userTodo.id;
      const title = userTodo.title;

      userTodoListWithIdString += `Id:${id} - ${title}\n`;
    }

    const taskIdToSelect = prompt(
      `${userTodoListWithIdString}\n(Please enter task ID)`
    );

    const selectedTaskId = parseInt(taskIdToSelect);

    /* For loop to get task to update */
    let taskToUpdate = {};

    for (let i = 0; i < selectedUserTodos.length; i++) {
      const userTodo = selectedUserTodos[i];
      const taskId = userTodo.id;

      if (selectedTaskId === taskId) {
        taskToUpdate = userTodo;
      }
    }

    const updateOptions = prompt(`How would you like to update your task?\n
  1 - Change title
  2 - Toggle completion\n
  (Please type a number)`);

    const optionToUpdate = parseInt(updateOptions);
    // const titleToChange = "";
    // const completionToggle = null;
    if (optionToUpdate === 1) {
      taskToUpdate.title = prompt(
        `${taskToUpdate.title}\n\nChange todo title:`
      );
      alert(
        `Task title was changed successfully!\n\nUpdated title: ${taskToUpdate.title}`
      );
    } else if (optionToUpdate === 2) {
      taskToUpdate.completed = !taskToUpdate.completed;
      alert(
        `Task completion was changed successfully!\n\nCompleted: ${taskToUpdate.completed}`
      );
    }
  } else if (selectedOption === 4) {
    // For loop to get task id of todo that user wants to delete
    let deleteOptions = `Which completed task would you like to delete?\n\n`;

    for (let i = 0; i < selectedUserTodos.length; i++) {
      // get user todo object
      const userTodo = selectedUserTodos[i];
      const id = userTodo.id;
      const title = userTodo.title;
      const completed = userTodo.completed;

      if (completed === true) {
        deleteOptions += `Id:${id} - ${title} | Completed: ${completed}\n`;
      }
    }

    const optionToDelete = parseInt(
      prompt(`${deleteOptions}\n\n(Please select an Id)`)
    );

    /* For loop to get task to delete */
    let deletedTask = null;

    for (let i = 0; i < todos.length; i++) {
      const userTodo = todos[i];
      const title = userTodo.title;
      const taskId = userTodo.id;

      if (optionToDelete === taskId) {
        deletedTask = todos.splice(i, 1);
        alert(
          `Task deleted successfully!\n\nDeleted task:\nId: ${taskId} | ${title}`
        );
      }
    }
  }

  // --end--

  programShouldWork = confirm(`Would you like to start over?`);

  if (programShouldWork === false) {
    alert(`Program finished work.\n\n--Hasta la vista, user!--`);
  }
}
