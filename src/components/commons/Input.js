import React from 'react';

const Input= ({atributo, handleChange, className}) => {
    return(
        <div>
        <input 
            id={atributo.id}
            type={atributo.type}
            name={atributo.name}
            placeholder={atributo.placeholder}
            onChange={handleChange}
            className={className}
        />
        </div>
    );
}

export default Input;