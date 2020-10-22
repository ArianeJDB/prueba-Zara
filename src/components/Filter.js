import React from 'react';

const Filter = ({setInputValue}) => {
    return (
        <div>
            <input type="text" onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}

export default Filter;