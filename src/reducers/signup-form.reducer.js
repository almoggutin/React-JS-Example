import signupFormActionTypes from '../actions/signup-form.actions';
import * as formUtils from '../utils/form.utils';

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
        case signupFormActionTypes.UPDATE_FIRST_NAME: {
            const { value, isValid, errorMessage } = action.payload;

            const updatedValues = { ...state.values, firstName: value };
            const updatedValidities = { ...state.validities, firstName: isValid };
            const updatedErrorMessages = { ...state.errorMessages, firstName: errorMessage };
            const updatedIsFormValidity =
                formUtils.areValuesValid(updatedValues) && formUtils.areValueValiditiesValid(updatedValidities);

            return {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
                isFormValid: updatedIsFormValidity,
            };
        }
        case signupFormActionTypes.UPDATE_LAST_NAME: {
            const { value, isValid, errorMessage } = action.payload;

            const updatedValues = { ...state.values, lastName: value };
            const updatedValidities = { ...state.validities, lastName: isValid };
            const updatedErrorMessages = { ...state.errorMessages, lastName: errorMessage };
            const updatedIsFormValidity =
                formUtils.areValuesValid(updatedValues) && formUtils.areValueValiditiesValid(updatedValidities);

            return {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
                isFormValid: updatedIsFormValidity,
            };
        }
        case signupFormActionTypes.UPDATE_EMAIL: {
            const { value, isValid, errorMessage } = action.payload;

            const updatedValues = { ...state.values, email: value };
            const updatedValidities = { ...state.validities, email: isValid };
            const updatedErrorMessages = { ...state.errorMessages, email: errorMessage };
            const updatedIsFormValidity =
                formUtils.areValuesValid(updatedValues) && formUtils.areValueValiditiesValid(updatedValidities);

            return {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
                isFormValid: updatedIsFormValidity,
            };
        }
        case signupFormActionTypes.UPDATE_PASSWORD: {
            const { value, isValid, errorMessage } = action.payload;

            const updatedValues = { ...state.values, password: value };
            const updatedValidities = { ...state.validities, password: isValid };
            const updatedErrorMessages = { ...state.errorMessages, password: errorMessage };
            const updatedIsFormValidity =
                formUtils.areValuesValid(updatedValues) && formUtils.areValueValiditiesValid(updatedValidities);

            return {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
                isFormValid: updatedIsFormValidity,
            };
        }
        case signupFormActionTypes.UPDATE_REPEATED_PASSWORD: {
            const { value, isValid, errorMessage } = action.payload;

            const updatedValues = { ...state.values, repeatedPassword: value };
            const updatedValidities = { ...state.validities, repeatedPassword: isValid };
            const updatedErrorMessages = { ...state.errorMessages, repeatedPassword: errorMessage };
            const updatedIsFormValidity =
                formUtils.areValuesValid(updatedValues) && formUtils.areValueValiditiesValid(updatedValidities);

            return {
                values: updatedValues,
                validities: updatedValidities,
                errorMessages: updatedErrorMessages,
                isFormValid: updatedIsFormValidity,
            };
        }
        default:
            return { ...state };
    }
};

export default signupFormReducer;
