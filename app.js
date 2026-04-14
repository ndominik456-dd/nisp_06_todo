let input = document.getElementById('in');
let button = document.getElementById('btn');
let list = document.getElementById('task-list');

button.onclick = () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
};
