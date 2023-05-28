import {API_URL} from './constants';

export function postAuth(loginPayload) {
    return fetch (`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(loginPayload)
    }).then(response => response.json())
}

export function getBooks() {
    return fetch (`${API_URL}/books`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}

export function getBookById(id) {
    return fetch (`${API_URL}/books/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
}