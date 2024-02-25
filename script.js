document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addItem();
        }
    });

    function addItem() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.className = 'todoItem';
        li.innerHTML = `
            <span>${todoText}</span>
            <button class="deleteBtn">Delete</button>
            <button class="editBtn">Edit</button>
        `;
        todoList.appendChild(li);
        todoInput.value = '';

        li.querySelector('.deleteBtn').addEventListener('click', function() {
            deleteItem(li);
        });

        li.querySelector('.editBtn').addEventListener('click', function() {
            editItem(li);
        });
    }

    function deleteItem(item) {
        item.remove();
    }

    function editItem(item) {
        const span = item.querySelector('span');
        const newText = prompt('Edit your to-do:', span.textContent.trim());
        if (newText !== null && newText.trim() !== '') {
            span.textContent = newText;
        }
    }
});
