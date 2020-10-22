import React from 'react';
import './filter.css'

const Filter = ({setInputValue}) => {
    return (
        <div className="filter">
            <label>Busca por marca o modelo</label>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}

export default Filter;