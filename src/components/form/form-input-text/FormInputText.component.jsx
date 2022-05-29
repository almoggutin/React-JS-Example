import './form-input-text.styles.scss';

const FormInputText = ({ id, type = 'text', className = 'form-input', required = false, handleInput }) => {
    return <input id={id} className={className} type={type} required={required} onInput={handleInput} />;
};

export default FormInputText;
