const loginFormActionTypes = {
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
};

export const updateFormFieldAction = (type, value, isValid, errorMessage = '') => ({
    type,
    payload: {
        value,
        isValid,
        errorMessage,
    },
});

export default loginFormActionTypes;