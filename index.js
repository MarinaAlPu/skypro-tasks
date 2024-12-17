import { renderTasks } from './modules/renderTasks.js'
import { updateTasks } from './modules/tasks.js'

fetch('https://wedev-api.sky.pro/api/todos')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateTasks(data.todos)
        renderTasks()
    })

const button = document.getElementById('add')
const input = document.getElementById('field')

button.addEventListener('click', () => {
    input.classList.remove('error')

    if (input.value === '') {
        input.classList.add('error')
        return
    }

    const newTask = {
        text: input.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
    }

    button.disabled = true
    button.textContent = 'создание задачи...'

    fetch('https://wedev-api.sky.pro/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTask),
    })
        .then(() => {
            return fetch('https://wedev-api.sky.pro/api/todos')
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            input.value = ''

            button.disabled = false
            button.textContent = 'Добавить'

            updateTasks(data.todos)
            renderTasks()
        })

    input.value = ''
})
