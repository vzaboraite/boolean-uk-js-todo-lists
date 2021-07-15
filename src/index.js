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

// Set the message text
let alertList = "";
// go through the array of users
for (let i = 0; i < users.length; i++) {
  const id = users[i].id;
  const name = users[i].name;
  const city = users[i].address.city;
  // Update message text
  alertList += `ID: ${id} | NAME: ${name} | CITY: ${city}\n`;
}
// Alert the user list
alert(alertList);

// Ask user to enter an ID
let requestForId = `Who's todo list would you like to see?\n`;
for (let i = 0; i < users.length; i++) {
  const id = users[i].id;
  const name = users[i].name;
  // Update requestForId
  requestForId += `ID: ${id} | ${name} \n`;
}
const userIdString = prompt(`${requestForId}\n(Please enter an ID)`);

const userId = parseInt(userIdString);

// Alert with username and todos titles
/* When user inputs id, it counts from 1, so in order to use user 
input to reach information within users[], 
index has to be smaller by one, in this case - users[userId - 1]
*/

let userTodoList = `${users[userId - 1].username}'s todo list:\n`;
let username = "";
for (let i = 0; i < todos.length; i++) {
  if (userId === todos[i].userId) {
    username = users[userId - 1].username;
    const todoTitle = todos[i].title;
    // update userTodoList text that will be passed to alert
    userTodoList += `-- ${todoTitle}\n `;
  }
}
// Add options for user to select from reading or creating the todo list
const optionString =
  prompt(`Hello ${username}\nYour Id: ${userId}\nWhat would you like to do?
1 - Read todo list
2 - Create new task
Please type a number`);

const option = parseInt(optionString);

if (option === 1) {
  alert(userTodoList);
} else if (option === 2) {
  let todo = {};
  todo.userId = userId;
  //   todo.id = todos[user].id + 1;
  todo.title = prompt("What task do you need to do?");
  todo.completed = false;
  console.log(todo);
  todos.push(todo);
}
console.log(todos);
