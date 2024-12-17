import { fetchAndRenderTasks } from './fetchAndRenderTasks.js'

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
                    return fetchAndRenderTasks()
                })
                .then(() => {
                    deleteElement.disabled = false
                    deleteElement.textContent = 'Удалить'
                })
        })
    }
}
