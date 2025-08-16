import { renderTasks } from './modules/renderTasks.js'
import { updateTasks } from './modules/tasks.js'

fetch("https://wedev-api.sky.pro/api/todos", {
    method: 'GET',
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        // console.log(data);
        updateTasks(data.todos)
        renderTasks() // вызываем рендер после того,как получили данные от сервера о существующих задачах
    });


const button = document.getElementById('add')
const input = document.getElementById('field')

button.addEventListener("click", () => {
    input.classList.remove("error");

    if (input.value === "") {
        input.classList.add("error");
        return;
    }

    // const newTask = { text: formateInput(input.value) };
    // console.log("Новая задача: ", newTask);

    const newTask = {
        text: input.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;'),
    }

    // tasks.push(newTask);

    // создание новой задачи через апи
    fetch("https://wedev-api.sky.pro/api/todos", {
        method: 'POST',
        body: JSON.stringify(newTask),
    })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.todos)
            updateTasks(data.todos)
            renderTasks()
        })

    input.value = "";
});
