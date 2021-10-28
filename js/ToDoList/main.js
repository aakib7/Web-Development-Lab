// let task = document.querySelector('#newTask');
// let add_button = document.querySelector('#addTask');
// let todo = document.querySelector('#incomplete-tasks');
// let incompleteTask = document.querySelector('#incomplete-tasks')

// function newTask() {
//     var li = document.createElement('li');
//     var checkBox = document.createElement('input');
//     var input = document.createElement('input');
//     var editButton = document.createElement('button');
//     var deleteButton = document.createElement('button');

//     //Each elements, needs appending
// 	checkBox.type="checkbox";
// 	input.type="text";
//     input.value = task.value;

// 	editButton.innerText="Edit";
// 	editButton.className="btn";
//     editButton.setAttribute('id','edit-todo');
// 	deleteButton.innerText="Delete";
// 	deleteButton.className="btn";
//     deleteButton.setAttribute('id','delete-todo');
//     input.setAttribute('id','todo')
//     checkBox.setAttribute('id','todo-checkbox');

//     li.appendChild(checkBox);
// 	li.appendChild(input);
// 	li.appendChild(editButton);
// 	li.appendChild(deleteButton);
// 	incompleteTask.appendChild(li);
// }
// document.addEventListener('DOMContentLoaded',()=>{
//     add_button.onclick = newTask;

// });

window.onload = function(){
    var btn = document.querySelector("#addTask");
    btn.onclick = handleAdd;

    var deleteBtn = document.querySelector("#deleteTodo");
    deleteBtn.onclick = (e) =>{
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);

    };

}
function handleAdd(){
    var newTask = document.querySelector("#newTask").value;
    var tasks = document.querySelector("#tasks");
    var newTaskText = document.createTextNode(newTask);
    var task = document.createElement("li");
    var deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    deletebtn.onclick = function(e){
         var tag = e.target;
        var li = tag.parentNode;
        li.parentNode.removeChild(li);
    }
    task.appendChild(newTaskText);
    tasks.appendChild(task);
    task.appendChild(deletebtn);

}


function handleDelete(e){
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);

}

