const baseUrl = 'https://front-test-api.herokuapp.com/'

export const getProducts = () => {
    return fetch(baseUrl + 'api/product')
    .then(response => response.json())
    .then(data => {
        const products = data.map(item => item)

        return products;
    })
}
