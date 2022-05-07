import React from 'react';
import './form-label.styles.scss';

const FormLabel = ({ title, htmlFor, className = 'form-label' }) => {
    return (
        <label htmlFor={htmlFor} className={className}>
            {title}
        </label>
    );
};

export default FormLabel;
