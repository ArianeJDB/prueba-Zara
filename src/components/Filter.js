import React from 'react';
// import './header.css'

const Filter = (props) => {
    return (
        <div>
            <input type="text" onChange={(e) => props.setInputValue(e.target.value)}/>
        </div>
    )
}

export default Filter;