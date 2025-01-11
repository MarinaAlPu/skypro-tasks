import { getTodos } from './api.js'
import { renderTasks } from './renderTasks.js'
import { updateTasks } from './tasks.js'

export const fetchAndRenderTasks = () => {
    return getTodos().then((data) => {
        updateTasks(data.todos)
        renderTasks()
    })
}
