let todo_form = document.getElementById('todo-form')
let todo_input = document.getElementById('todo-input')
let taskslist = document.getElementById('tasks');
let any_li_in_tasks = document.querySelector('.task');

localStorage.setItem('tasks', ["sleep early", "do homework"]);

onload = function(){
    if(localStorage.length > 0){
        taskslist.innerHTML = this.localStorage.tasks;
    }
}


todo_form.addEventListener('submit', function(e){
    e.preventDefault();
    if(todo_input.value === ""){
        alert("Don't add empty task , please");
    }
    else{
        let task_li = document.createElement('li')
        let task_div = document.createElement('div')
        task_li.classList('name');
        task_li.innerText = todo_input.value;
        task_div.appendChild(task_li);
        taskslist.appendChild(task_div);
        task_li.classList.add('')
        // localStorage.setItem('task', task_li.value);
        todo_input.value = "";
    }
    
})

