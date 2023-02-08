// 1. access the DOM Elements.
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");



// 2. To Prevent Default Submission.
document.forms[0].onsubmit = (e) => {
  e.preventDefault();
}

// 3. Create An empty Array To Store The Tasks.
let arrayOfTasks = [];

// 4. Add a Task on click.
submit.onclick = () => {
  if (input.value !== 0) {
    addTaskToArray();
    input.value = "";
  }
}

// 5. Create A function add Task to the Array of Tasks.
function addTaskToArray() {
  const task = {
    id: Date.now(),
    title: input.value,
    completed: false,
  }
  arrayOfTasks.push(task);
  console.log(arrayOfTasks)

  addElements();
  addData();
}
// 6. Create A function to Add Elements to Page from Array Of Tasks.
function addElements() {
  tasksDiv.innerHTML = "";
  arrayOfTasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    // If Task Is Done(task.completed === true),then give it a "done" Class.
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    let titleOfTask = document.createElement("p");
    titleOfTask.textContent = task.title;
    div.appendChild(titleOfTask);
    let delBtn = document.createElement("button");
    delBtn.className = "remove";
    delBtn.textContent = "Delete";
    div.appendChild(delBtn);
    tasksDiv.appendChild(div);
  })
}
// 7. Create A function to Add Data to Local Storage from Array of Tasks.
function addData() {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

// 8. Check if Theres Tasks In Local Storage.
let data = window.localStorage.getItem("tasks");
if (data) {
  arrayOfTasks = JSON.parse(data);
}

// 9. Create A function to get Data from Local Storage.
function getData() {
  // Check If Item ("tasks") is existing.
  if (data) {
    let tasks = JSON.parse(data); // Then revese the data by using JSON.parse.
    addElements(tasks); // Then upload the data by calling the addElements function.
  }
}
// 10. Trigger Get Data From Local Storage Function.
getData();

// 11. Put click event on Each Task Element when it's exist.
tasksDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    // Remove Parent Task From LocalStorage.
    deleteTask(e.target.parentElement.getAttribute("data-id"));
    // Romove the Parent Element From Page. 
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("task")) {
    // call the Function toggelStatus for the current Task.
    toggelStatus(e.target.getAttribute("data-id"));
    // Then give it a "done" class if it has'nt alreay.(toggle Method)
    e.target.classList.toggle("done");
  }
});

// 12. Create a function to delete Task With task Id
function deleteTask(taskId) {
  // Do filtering on the Array of Tasks and reutrn the id if it not equal to the current element id.
  // For Explain Only:
  // for (let i = 0; i < arrayOfTasks.length; i++) {
  //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  //   console.log(`${typeof arrayOfTasks[i].id} === ${typeof taskId}`);
  // }
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  // Then update the Element in Local Storage by Calling the Add Data to Local Storage function.
  addData(arrayOfTasks);
}

// 13. Create a Function to toggle Status Task with Task Id:
function toggelStatus(taskId) {
  // 1. Do looping on arrayOfTasks
  // 2. Change completed to ture on click By:
  // 3. Checking if the Element ID == task ID then:
  // 4. check if completed == false then let it ture Otherweis keep it false
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true : arrayOfTasks[i].completed = false
    }
  }
  // Then update the Element in Local Storage by Calling the Add Data to Local Storage function outside the Loop.
  addData(arrayOfTasks);
}