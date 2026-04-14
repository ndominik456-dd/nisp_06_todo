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

    li.appendChild(checkbox);
    li.append(" " + input.value);
    list.appendChild(li);
    input.value = '';
};

