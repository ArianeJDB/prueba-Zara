import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProductById } from '../services/getProducts'
import { addProduct } from '../services/addProduct'
import Header from './Header'
import './productDetail.css'

const ProductDetail = (props) => {
    const id = props.params.match.params.id
    console.log('props', typeof props.params)
    const currentPage = useLocation().pathname;
    const [cartCount, setCartCount] = useState(null)
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

    const handleColorSelected = event => setColorCode(event.target.value)

    const handleStorageSelected = event => setStorageCode(event.target.value)

    const sendProductToCart = () => {
        addProduct({ id, colorCode, storageCode })
            .then(data => setCartCount(data.count))
    }

    return (
        <>
            <Header
                path={currentPage}
                label={product.brand}
                cartCount={cartCount}
            />
            <section className="detail_section">
                <div className="img_container">
                    <img src={product.imgUrl} alt={product.brand} />
                </div>
                <div className="description-actions_container">
                    <div className="description_container">
                        <h3>Descripción:</h3>
                        <ul className="description_list">
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
                    <ul className="camaras_list">
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
                    <div className="actions_container">
                        <h3>Acciones:</h3>
                        <form action="">
                            <div className="color_container">
                            <label htmlFor="color">Color:</label>
                            <select name="color" id="color" value={colorCode} onChange={handleColorSelected} >
                                {product.options
                                    ? product.options.colors.map((color, index) =>
                                        <option value={color.code} key={index} >{color.name}</option>)
                                    : ''
                                }
                            </select>
                            </div>
                            <div className="storage_container">
                            <label htmlFor="storage">Almacenamiento:</label>
                            <select name="storage" id="storage" value={storageCode} onChange={handleStorageSelected}>
                                {product.options
                                    ? product.options.storages.map((storage, index) =>
                                        <option value={storage.code} key={index}>{storage.name}</option>)
                                    : ''
                                }
                            </select>
                            </div>
                        </form>
                        <button onClick={sendProductToCart} className="btn">Añadir a la cesta</button>
                        <Link to="/">Volver al listado de productos</Link>
                    </div>
                </div>
            </section>
        </>
    )
}


export default ProductDetail