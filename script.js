const tasklist= document.getElementById('tasklist');

function addFeature(title, description){
    const div= document.createElement('div');
    const h3= document.createElement('h3');
    const p= document.createElement('p');

    h3.textContent= title;
    p.textContent= description;

    div.appendChild(h3);
    div.appendChild(p);

    tasklist.appendChild(div);
}

addFeature("Organized", "Keep all your academic tasks and information in one place.");
addFeature("Efficient", "Save time and effort with our streamlined academic management tools.");
addFeature("Focused", "Stay on top of your academic goals and deadlines with ease.");

tasklist.addEventListener('click', (event) => {
    if (event.target.classList.contains('del-btn')) {
        const taskItem=event.target.closest('li');
        taskItem.remove();
}});

let tasks=[];

const taskInput=document.getElementById('taskInput');
const addBtn=document.getElementById('addBtn');
const taskList=document.getElementById('taskList');

function render(){
    taskList.innerHTML='';
    tasks.forEach((taskText, index) => {
        const li=document.createElement('li');
        li.className="task-item";
        li.innerHTML= `
            <span>${taskText}</span>
            <button class="del-btn" data-index="${index}">Delete</button>
            `;
        taskList.appendChild(li);
    });
}

taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('del-btn')) {
        const index=e.target.getAttribute('data-index');
        tasks.splice(index,1);
        render();
}});

addBtn.addEventListener('click', () => {
    if (taskInput.ariaValueMax.trim() !==""){
        tasks.push(taskInput.value);
        taskInput.value='';
        render();
    }
});

const notesContainer=document.getElementById('notesContainer');
const addNoteBtn=document.getElementById('addNoteBtn');
let notes=[];

function renderNotes(){
    notesContainer.innerHTML='';
    notes.for
}