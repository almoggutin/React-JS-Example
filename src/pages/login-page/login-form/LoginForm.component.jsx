import React, { useReducer, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import './login-form.styles.scss';

import { AuthContext } from '../../../contexts/Auth.context';
import { loginAction } from '../../../actions/auth.actions';

import FormInputContainer from '../../../components/form/form-input-container/FormInputContainer.component';
import Button from '../../../components/button/Button.component';

import loginFormReducer, { LOGIN_FORM_INITIAL_STATE } from '../../../reducers/login-form.reducer';
import loginFormActionTypes, { updateFormFieldAction } from '../../../actions/login-form.actions';

import { login } from '../../../services/auth.service';
import { setUserDataOnSessionStorage } from '../../../utils/storage.utils';

const LoginForm = () => {
    const navigate = useNavigate();

    const { dispatchAuthState } = useContext(AuthContext);

    const [loginFormState, dispatchLoginFormState] = useReducer(loginFormReducer, LOGIN_FORM_INITIAL_STATE);

    const handleEmailInput = (event) => {
        const emailInput = event.target.value.toLowerCase().trim();

        if (emailInput === '') {
            dispatchLoginFormState(
                updateFormFieldAction(
                    loginFormActionTypes.UPDATE_EMAIL,
                    emailInput,
                    false,
                    'Please enter an email address'
                )
            );

            return;
        }

        if (!isEmail(emailInput)) {
            dispatchLoginFormState(
                updateFormFieldAction(
                    loginFormActionTypes.UPDATE_EMAIL,
                    emailInput,
                    false,
                    'Please enter a valid email address'
                )
            );

            return;
        }

        dispatchLoginFormState(updateFormFieldAction(loginFormActionTypes.UPDATE_EMAIL, emailInput, true));
    };

    const handlePasswordInput = (event) => {
        const passwordInput = event.target.value.trim();

        if (passwordInput === '') {
            dispatchLoginFormState(
                updateFormFieldAction(
                    loginFormActionTypes.UPDATE_PASSWORD,
                    passwordInput,
                    false,
                    'Please enter your password'
                )
            );

            return;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;
        if (!passwordRegex.test(passwordInput)) {
            dispatchLoginFormState(
                updateFormFieldAction(
                    loginFormActionTypes.UPDATE_PASSWORD,
                    passwordInput,
                    false,
                    'Please enter a password between 8-20 characters with at least 1 capital letter and 1 number'
                )
            );

            return;
        }

        dispatchLoginFormState(updateFormFieldAction(loginFormActionTypes.UPDATE_PASSWORD, passwordInput, true));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { email, password } = loginFormState.values;

            const res = await login(email, password);
            const { userID } = res.data;
            dispatchAuthState(loginAction(userID));
            setUserDataOnSessionStorage({ userID });

            navigate('/tasks');
        } catch (err) {
            const errObj = JSON.parse(err.message);
            if (errObj.status === 400) alert('Sorry this account could not be found.');
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <FormInputContainer
                    id="email"
                    labelTitle="Email:"
                    inputType="email"
                    isRequired={true}
                    handleInput={handleEmailInput}
                    errorMessage={loginFormState.errorMessages.email}
                />

                <FormInputContainer
                    id="password"
                    labelTitle="Password:"
                    inputType="password"
                    isRequired={true}
                    handleInput={handlePasswordInput}
                    errorMessage={loginFormState.errorMessages.password}
                />
            </div>

            <Link to="/signup" className="signup-link">
                Don't have an account? Signup...
            </Link>

            <Button type="submit" className="login-btn" disabled={!loginFormState.isFormValid}>
                Login
            </Button>
        </form>
    );
};

export default LoginForm;
