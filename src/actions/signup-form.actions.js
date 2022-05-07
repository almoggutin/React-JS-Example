const signupFormActionTypes = {
    UPDATE_FIRST_NAME: 'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME: 'UPDATE_LAST_NAME',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_REPEATED_PASSWORD: 'UPDATE_REPEATED_PASSWORD',
};

export const updateFormFieldAction = (type, value, isValid, errorMessage = '') => ({
    type,
    payload: {
        value,
        isValid,
        errorMessage,
    },
});

export default signupFormActionTypes;
