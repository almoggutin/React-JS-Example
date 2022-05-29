const signupFormActionTypes = {
    UPDATE_FORM_FIELD: 'UPDATE_FORM_FIELD',
};

export const updateFormFieldAction = (inputType, value, isValid = true, errorMessage = '') => ({
    type: signupFormActionTypes.UPDATE_FORM_FIELD,
    payload: {
        inputType,
        value,
        isValid,
        errorMessage,
    },
});

export default signupFormActionTypes;
