import { renderTasks } from './modules/renderTasks.js'
import { tasks, updateTasks } from './modules/tasks.js'

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

    tasks.push(newTask)

    input.value = ''

    renderTasks()
})
