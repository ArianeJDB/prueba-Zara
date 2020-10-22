import React from 'react';
import PropTypes from 'prop-types';
import './filter.css'

const Filter = ({setInputValue}) => {
    return (
        <div className="filter">
            <label>Busca por marca o modelo</label>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}

Filter.propTypes = {
    setInputValue: PropTypes.function
}
export default Filter;