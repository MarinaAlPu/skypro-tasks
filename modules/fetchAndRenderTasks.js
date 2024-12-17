import { renderTasks } from './renderTasks.js'
import { updateTasks } from './tasks.js'

export const fetchAndRenderTasks = () => {
    return fetch('https://wedev-api.sky.pro/api/todos')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateTasks(data.todos)
            renderTasks()
        })
}
