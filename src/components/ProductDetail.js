import React from 'react';
const ProductDetail = (props) => {
    console.log('param', props.params.match.params.id)
    return (
        <div>Hola, soy el detalle</div>
    )
}

export default ProductDetail