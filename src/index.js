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
const userIdString = prompt(`Who's todo list would you like to see? 
${alertList}
(Please enter an ID)
`);

const userId = parseInt(userIdString);

// Alert with username and todos titles
let userTodoList = `${users[userId - 1].username} TODOS:\n`;

for (let i = 0; i < todos.length; i++) {
  if (userId === todos[i].userId) {
    const todoTitle = todos[i].title;
    userTodoList += `-- ${todoTitle}\n `;
  }
}
alert(userTodoList);
