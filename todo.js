var ulElement = document.getElementById("list")
function addTasks() {
    var input = document.getElementById("input");

if (input.value) {
  

    var liElement = document.createElement("li")
    var liText = document.createTextNode(input.value);
    liElement.appendChild(liText);
  ulElement.appendChild(liElement);

// delete button
var delbtnElement = document.createElement("button")
var delbtntext = document.createTextNode("Delete")
delbtnElement.appendChild(delbtntext);
delbtnElement.setAttribute("onclick","deleteSingleTodo(this)");
liElement.appendChild(delbtnElement);


// edit button
var EditBtnElement = document.createElement("button")
var EditBtnText = document.createTextNode("Edit")
EditBtnElement.appendChild(EditBtnText);
liElement.appendChild(EditBtnElement);
EditBtnElement.setAttribute("onclick","editSingleTodo(this)");
ulElement.appendChild(liElement);

  
  input.value = "";
}else{alert("please enter items.")}    
}
function deleteTasks() {
    ulElement.innerText = ""
}
function deleteSingleTodo(e) {
  console.log(e.parentNode.remove());  
}
function editSingleTodo(e) {
  var updateVal = prompt("Enter Updated Value")
    e.parentNode.firstChild.nodeValue = updateVal
}