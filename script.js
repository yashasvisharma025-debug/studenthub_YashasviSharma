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