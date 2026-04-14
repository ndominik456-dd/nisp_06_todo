let input = document.getElementById('in');
let button = document.getElementById('btn');
let list = document.getElementById('task-list');

button.onclick = () => {
    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onchange = () => {
        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Usuń';
    delBtn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.append(" " + input.value + " ");
    li.appendChild(delBtn);
    
    list.appendChild(li);
    input.value = '';
};


