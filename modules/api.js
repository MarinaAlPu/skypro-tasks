const host = 'https://wedev-api.sky.pro/api/v2/todos'
const authHost = 'https://wedev-api.sky.pro/api/user'

let token = ''

export const updateToken = (newToken) => {
    token = newToken
}

export function getTodos() {
    return fetch(host, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        return response.json()
    })
}

export function deleteTodo({ id }) {
    return fetch(`${host}/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        return response.json()
    })
}

export function postTodo({ text }) {
    return fetch(host, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            text,
        }),
    }).then((response) => {
        return response.json()
    })
}

export function login({ login, password }) {
    return fetch(`${authHost}/login`, {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        }),
    }).then((response) => {
        return response.json()
    })
}

export function registration({ login, name, password }) {
    return fetch(authHost, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    }).then((response) => {
        return response.json()
    })
}
