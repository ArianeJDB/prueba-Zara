const baseUrl = 'https://front-test-api.herokuapp.com/'

export const postProduct = (payload) => {
    return fetch(baseUrl + 'api/cart', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .catch(error => console.error('Error:', error))
        .then(response => response);
}
