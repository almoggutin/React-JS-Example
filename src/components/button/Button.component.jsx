import React from 'react';
import './button.styles.scss';

const Button = ({ type = 'button', className, disabled = false, handleClick, children }) => {
    return (
        <button type={type} className={className} onClick={handleClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
