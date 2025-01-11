import { deleteTodo, postTodo } from './api.js'
import { fetchAndRenderTasks } from './fetchAndRenderTasks.js'

export const initDeleteListeners = () => {
    const deleteElements = document.querySelectorAll('.delete')

    for (const deleteElement of deleteElements) {
        deleteElement.addEventListener('click', (event) => {
            event.stopPropagation()
            const id = deleteElement.dataset.id

            deleteElement.disabled = true
            deleteElement.textContent = 'Задача удаляется...'

            deleteTodo({ id })
                .then(() => {
                    return fetchAndRenderTasks()
                })
                .then(() => {
                    deleteElement.disabled = false
                    deleteElement.textContent = 'Удалить'
                })
        })
    }
}

export const initAddTaskListener = () => {
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

        postTodo(newTask)
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
}
