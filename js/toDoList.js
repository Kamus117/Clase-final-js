const $form = document.querySelector(`.form`);
const $input = document.querySelector(`.input`);
const $ul = document.querySelector(`.ul`);
const $deleteAllBtn = document.querySelector(`.delete-all-btn`);

const getTaskList =()=>{
    return localStorage.getItem(`taskList`);
}

let taskList = getTaskList() ? JSON.parse(getTaskList()) : [];

const saveTaskList =()=>{
    localStorage.setItem(`taskList`, JSON.stringify(taskList));
}

const createTask =(taskName)=>{
    return `
    <li>${taskName}</li>
    `
};

const renderTaskList =()=>{
    $ul.innerHTML = taskList.join(``);
}

const clearInput =()=>{
    $input.value = ``;
}

const toggleBtn =()=>{
    if(taskList.length === 0){
        $deleteAllBtn.classList.add(`hidden`);
    }
    else{
        $deleteAllBtn.classList.remove(`hidden`);
    }
}

const handleSubmit =(e)=>{

    e.preventDefault();

    const taskName = $input.value;

    const newTask = createTask(taskName);

    taskList.push(newTask);

    saveTaskList();

    renderTaskList();

    clearInput();

    toggleBtn();
}

const deleteAllTasks =()=>{
    if(confirm(`¿Quiere borrar todas las tareas?`)){
        taskList = [];
        saveTaskList();
        renderTaskList();
        toggleBtn();
    }
    else{
        null;
    }
}

const init =()=>{
    $form.addEventListener(`submit`, handleSubmit);
    $deleteAllBtn.addEventListener(`click`, deleteAllTasks);
    renderTaskList();
    toggleBtn();
}

init();

console.log(taskList);