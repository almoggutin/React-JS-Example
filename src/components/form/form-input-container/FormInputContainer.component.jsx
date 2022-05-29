import './form-input-container.styles.scss';

import FormLabel from '../form-label/FormLabel.component';
import FormInputText from '../form-input-text/FormInputText.component';

const FormInputContainer = ({ id, labelTitle, inputType, isRequired, handleInput, errorMessage }) => {
    return (
        <div className="form-input-container">
            <FormLabel htmlFor={id} title={labelTitle} />

            <FormInputText id={id} type={inputType} required={isRequired} handleInput={handleInput} />

            <div className="error-message">{errorMessage}</div>
        </div>
    );
};

export default FormInputContainer;
