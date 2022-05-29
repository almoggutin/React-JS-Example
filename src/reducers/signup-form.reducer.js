import { cloneDeep } from 'lodash';

import signupFormActionTypes from '../actions/signup-form.actions';
import { areFormValuesValid } from '../utils/form.utils';

export const SIGNUP_FORM_INITIAL_STATE = {
    values: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatedPassword: '',
    },
    validities: {
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        repeatedPassword: true,
    },
    errorMessages: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatedPassword: '',
    },
    isFormValid: false,
};

const signupFormReducer = (state, action) => {
    switch (action.type) {
        case signupFormActionTypes.UPDATE_FORM_FIELD: {
            const { inputType, value, isValid, errorMessage } = action.payload;

            const updatedState = cloneDeep(state);
            console.log(inputType);
            console.log(updatedState);
            console.log(value);
            updatedState.values[inputType] = value;
            updatedState.validities[inputType] = isValid;
            updatedState.errorMessages[inputType] = errorMessage;
            updatedState.isFormValid =
                areFormValuesValid(updatedState.values) && areFormValuesValid(updatedState.validities);

            return updatedState;
        }
        default:
            return { ...state };
    }
};

export default signupFormReducer;
