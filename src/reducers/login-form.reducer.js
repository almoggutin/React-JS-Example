import { cloneDeep } from 'lodash';

import loginFormActionTypes from '../actions/login-form.actions';
import { areFormValuesValid } from '../utils/form.utils';

export const LOGIN_FORM_INITIAL_STATE = {
    values: {
        email: '',
        password: '',
    },
    validities: {
        email: true,
        password: true,
    },
    errorMessages: {
        email: '',
        password: '',
    },
    isFormValid: false,
};

const loginFormReducer = (state, action) => {
    switch (action.type) {
        case loginFormActionTypes.UPDATE_FORM_FIELD: {
            const { inputType, value, isValid, errorMessage } = action.payload;

            const updatedState = cloneDeep(state);
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

export default loginFormReducer;
