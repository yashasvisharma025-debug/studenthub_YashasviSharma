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