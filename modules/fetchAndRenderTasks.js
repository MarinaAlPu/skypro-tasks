import { getTodos } from './api.js';
import { renderTasks } from './renderTasks.js'
import { updateTasks } from './tasks.js'

// const token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";

export const fetchAndRenderTasks = () => {
    // return fetch('https://wedev-api.sky.pro/api/v2/todos', {
    //     headers: {
    //         Authorization: `Bearer ${token}`
    //     }
    // })
    return getTodos()
        // .then((response) => { // это уже выполняем в getTodos()
        //     // if(response.status === 401) {
        //     //     console.log("Нет авторизации");
        //     //     throw new Error("Нет авторизации");
        //     // }
        //     return response.json()
        // })
        .then((data) => {
            // console.log("\nЭто data в fetchAndRenderTasks:");
            // console.log(data);
            updateTasks(data.todos)
            renderTasks()
        })
}
