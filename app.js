class TodoApp {
    constructor() {
        this.input = document.getElementById('in');
        this.list = document.getElementById('task-list');
        this.button = document.getElementById('btn');

        // Podpięcie zdarzenia kliknięcia
        this.button.onclick = () => this.addTask();
    }

    addTask() {
        const text = this.input.value;
        if (!text) return;

        const li = document.createElement('li');

        // Checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = () => {
            li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        };

        // Przycisk usuń
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Usuń';
        delBtn.onclick = () => li.remove();

        li.append(checkbox, " " + text + " ", delBtn);
        this.list.appendChild(li);
        this.input.value = '';
    }
}

// Inicjalizacja aplikacji
new TodoApp();
