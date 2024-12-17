import { fetchAndRenderTasks } from './modules/fetchAndRenderTasks.js'

fetchAndRenderTasks()

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
            return fetchAndRenderTasks()
        })
        .then(() => {
            input.value = ''

            button.disabled = false
            button.textContent = 'Добавить'
        })

    input.value = ''
})
