import { tasks } from './tasks.js'
import { initDeleteListeners, initAddTaskListener } from './initListeners.js'

export const renderTasks = () => {
    const app = document.getElementById('app')

    const tasksHtml = tasks
        .map((task) => {
            return `<li><span>${task.text}</span><button class="delete" data-id="${task.id}">удалить</button></li>`
        })
        .join('')

    const appHtml = `
        <h1>Список задач</h1>
        <ul id="list">${tasksHtml}</ul>
        <div>
            <h3>Форма добавления</h3>
            Что нужно сделать:
            <input type="text" id="field" />
            <br /><br />
            <button type="button" id="add">Добавить</button>
        </div>
    `

    app.innerHTML = appHtml

    initDeleteListeners()
    initAddTaskListener()
}
