import { renderTasks } from './renderTasks.js'
import { updateTasks } from './tasks.js'

export const initDeleteListeners = () => {
    const deleteElements = document.querySelectorAll('.delete')

    for (const deleteElement of deleteElements) {
        deleteElement.addEventListener('click', (event) => {
            event.stopPropagation()
            const id = deleteElement.dataset.id

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
                    updateTasks(data.todos)
                    renderTasks()
                })
        })
    }
}
