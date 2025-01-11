const host = 'https://wedev-api.sky.pro/api/v2/todos'

const token = 'Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k'

export function getTodos() {
    return fetch(host, {
        method: 'GET',
        headers: {
            Authorization: token,
        },
    }).then((response) => {
        return response.json()
    })
}

export function deleteTodo({ id }) {
    return fetch(`${host}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: token,
        },
    }).then((response) => {
        return response.json()
    })
}

export function postTodo({ text }) {
    return fetch(host, {
        method: 'POST',
        headers: {
            Authorization: token,
        },
        body: JSON.stringify({
            text,
        }),
    }).then((response) => {
        return response.json()
    })
}
