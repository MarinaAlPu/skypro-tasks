import { renderTasks } from './renderTasks.js'
import { updateTasks } from './tasks.js'

export const initDeleteListeners = () => {
    const deleteElements = document.querySelectorAll('.delete')

    for (const deleteElement of deleteElements) {
        deleteElement.addEventListener('click', (event) => {
            event.stopPropagation()
            const id = deleteElement.dataset.id

            deleteElement.disabled = true
            deleteElement.textContent = 'Задача удаляется...'

            fetch(`https://wedev-api.sky.pro/api/todos/${id}`, {
                method: 'DELETE',
            })
                .then(() => {
                    return fetch('https://wedev-api.sky.pro/api/todos')
                })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    deleteElement.disabled = false
                    deleteElement.textContent = 'Удалить'

                    updateTasks(data.todos)
                    renderTasks()
                })
        })
    }
}
