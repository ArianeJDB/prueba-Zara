const baseUrl = 'https://front-test-api.herokuapp.com/'

export const getProducts = () => {
    return fetch(baseUrl + 'api/product')
    .then(response => response.json())
    .then(data => data.map(item => item))
}

export const getProductById = (id) => {
    return fetch(baseUrl + 'api/product/' + id)
    .then(response => response.json())
    .then(data => data)
}