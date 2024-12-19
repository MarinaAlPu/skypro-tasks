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
        .then((response) => {
            if (response.status === 201) {
                return response.json()
            } else {
                if (response.status === 500) {
                    throw new Error('Сервер упал')
                }

                if (response.status == 400) {
                    throw new Error('Вы допустили ошибку')
                }

                throw new Error('что-то пошло не так')
            }
        })
        .then(() => {
            return fetchAndRenderTasks()
        })
        .then(() => {
            input.value = ''
        })
        .catch(() => {
            alert('Что-то пошло не так')
        })
        .finally(() => {
            button.disabled = false
            button.textContent = 'Добавить'
        })
})
