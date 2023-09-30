document.addEventListener("DOMContentLoaded", () => {
  // your code here
const form = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");

form.addEventListener("submit", e => {
  //prevent the form from refreshing
e.preventDefault(); 
let taskDescription = document.getElementById("new-task-description").value;

let listItems = document.createElement("li");
listItems.textContent = taskDescription;
taskList.appendChild(listItems);

document.getElementById("new-task-description").value = "";
})

});
