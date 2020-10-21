import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductById } from '../services/getProducts'
import { postProduct } from '../services/postProduct'

const ProductDetail = (props) => {
    const id = props.params.match.params.id
    const cartCount = JSON.parse(localStorage.getItem('cartCount'))

    const [product, setProduct] = useState([]);
    const [colorCode, setColorCode] = useState('');
    const [storageCode, setStorageCode] = useState('');

    useEffect(() => {
        getProductById(id)
            .then(data => {
                setProduct(data)
                data.options.colors.map(color => setColorCode(color.code))
                data.options.storages.map(storage => setStorageCode(storage.code))
            })
    }, [id])

    const handleColorSelected = (event) => {
        setColorCode(event.target.value)

    }

    const handleStorageSelected = (event) => {
        setStorageCode(event.target.value)

    }
    
    const sendProductToCart = () => {
        postProduct({id, colorCode, storageCode})
        .then(data => {
            if(!cartCount) {
                localStorage.setItem('cartCount', JSON.stringify(data.count))
            } else {
              setCartCount(data.count)  
            }
        })
    }

    const setCartCount = (data) => {
        let total = cartCount  + data;
        localStorage.setItem('cartCount', JSON.stringify(total))
    }
    return (
        <React-Fragment>
            <div>
                <img src={product.imgUrl} alt={product.brand} />
            </div>
            <div>
                <h3>Descripción:</h3>
                <ul>
                    <li>
                        Marca: {product.brand}
                    </li>
                    <li>
                        Modelo: {product.model}
                    </li>
                    {product.price !== '' ? <li>Precio: {product.price}€</li> : ''}
                    <li>
                        CPU: {product.cpu}
                    </li>
                    {product.ram !== '' ? <li>RAM: {product.ram}</li> : ''}
                    <li>
                        Sistema Operativo: {product.os}
                    </li>
                    <li>
                        Resolución: {product.displayResolution}
                    </li>
                    {product.battery !== '' ? <li>Batería: {product.battery}</li> : ''}
                    <li>
                        Cámaras:
                    <ul>
                            <li>
                                Cámara principal: {product.primaryCamera}
                            </li>
                            <li>
                                Cámara secundaria: {product.secondaryCmera}
                            </li>
                        </ul>
                    </li>
                    {product.dimentions !== "-"
                        ? <li>Dimensiones: {product.dimentions}</li>
                        : ''
                    }
                    {product.weight !== ''
                        ? <li>Peso: {product.weight}gr.</li>
                        : ''
                    }
                </ul>
            </div>
            <div>
                <h3>Acciones:</h3>
                <form action="">
                    <label htmlFor="color">Escoge un color:</label>
                    <select name="color" id="color" value={colorCode} onChange={handleColorSelected} >
                        {product.options
                            ? product.options.colors.map((color, index) =>
                                <option value={color.code} key={index} >{color.name}</option>)
                            : ''
                        }
                    </select>
                    <label htmlFor="storage">Escoge un almacenamiento:</label>
                    <select name="storage" id="storage" value={storageCode} onChange={handleStorageSelected}>
                        {product.options
                            ? product.options.storages.map((storage, index) =>
                                <option value={storage.code} key={index}>{storage.name}</option>)
                            : ''
                        }
                    </select>
                </form>
                <button onClick={sendProductToCart}>Añadir a la cesta</button>
                <Link to="/">Volver al listado de productos</Link>
            </div>
        </React-Fragment>
    )
}

export default ProductDetail