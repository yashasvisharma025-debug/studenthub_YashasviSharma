let tasks= JSON.parse(localStorage.getItem('tasks')) || [];
let notes=JSON.parse(localStorage.getItem('notes')) || [];

if (!sessionStorage.getItem('sessionStarted')){
    console.log("Session started: Welcome to Student Hub Dashboard.");
    sessionStorage.setItem('sessionStarted', 'true');
}

const taskInput=document.getElementById('taskInput');
const addBtn=document.getElementById('addBtn');
const taskList=document.getElementById('taskList');
const notesContainer = document.getElementById('notesContainer');
const addNoteBtn = document.getElementById('addNoteBtn');

function renderTasks() {
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li=document.createElement('li');
        li.className="flex justify-between items-center p-3 bg-pink-50 rounded-lg border border-secondary";
        li.innerHTML=`
            <span class="text-primary">${task}</span>
            <button class="del-btn text-red-500 font-bold" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(li);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

taskList.addEventListener('click', (e) =>{
    if (e.target.classList.contains('del-btn')) {
        tasks.splice(e.target.getAttribute('data-index'), 1);
        renderTasks();
    }
});

addBtn.addEventListener('click', () => {
    if (taskInput.value.trim() !== "") {
        tasks.push(taskInput.value);
        taskInput.value = '';
        renderTasks();
    }
});

function renderNotes(){
    notesContainer.innerHTML='';
    notes.forEach((note, index) => {
        const div=document.createElement('div')
;
    div.className="p-4 bg-white border-2 border-secondary rounded-lg shadow-sm hover:shadow-md transition";
    div.innerHTML=`
    <h3 class="font-bold text-primary">${note.title}</h3>
    <p class= "text-sm text-gray-700 mt-1">${note.body}</p>
    <div class="mt-3 flex gap-2">
        <button onclick="editNote(${index})" class="text-xs text-blue-600 underline">Edit</button>
        <button onclick="deleteNote(${index})" class="text-xs text-red-500 underline">Delete</button>
    </div>
    `;
notesContainer.appendChild(div);});
localStorage.setItem('notes', JSON.stringify(notes));
}

function editNote(index){
    const newTitle=prompt("Edit Title:", notes[index].title);
    const newBody=prompt("Edit Body:", notes[index].body);
    if (newTitle!==null && newBody!==null){
        notes[index]={title: newTitle, body: newBody};
        renderNotes();
    }
}

function deleteNote(index){
    notes.splice(index, 1);
    renderNotes();
}

addNoteBtn.addEventListener('click', () => {
    const title = prompt("Note Title:");
    const body = prompt("Note Body:");
    if (title && body) {
        notes.push({ title, body });
        renderNotes();
    }
});

renderTasks();
renderNotes();