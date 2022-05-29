import { useReducer, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import './signup-form.styles.scss';

import { AuthContext } from '../../../contexts/Auth.context';
import { loginAction } from '../../../actions/auth.actions';

import FormInputContainer from '../../../components/form/form-input-container/FormInputContainer.component';
import Button from '../../../components/button/Button.component';

import signupFormReducer, { SIGNUP_FORM_INITIAL_STATE } from '../../../reducers/signup-form.reducer';
import { updateFormFieldAction } from '../../../actions/signup-form.actions';

import { signup } from '../../../services/auth.service';
import { setUserDataOnSessionStorage } from '../../../utils/storage.utils';

const SignupForm = () => {
    const navigate = useNavigate();

    const { updateAuthState } = useContext(AuthContext);

    const [signupFormState, dispatchSignupFormState] = useReducer(signupFormReducer, SIGNUP_FORM_INITIAL_STATE);

    const handleFirstNameInput = (event) => {
        const firstNameInput = event.target.value.trim();

        if (firstNameInput === '') {
            dispatchSignupFormState(
                updateFormFieldAction('firstName', firstNameInput, false, 'Please enter your first name')
            );

            return;
        }

        dispatchSignupFormState(updateFormFieldAction('firstName', firstNameInput));
    };

    const handleLastNameInput = (event) => {
        const lastNameInput = event.target.value.trim();

        if (lastNameInput === '') {
            dispatchSignupFormState(
                updateFormFieldAction('lastName', lastNameInput, false, 'Please enter your last name')
            );

            return;
        }

        dispatchSignupFormState(updateFormFieldAction('lastName', lastNameInput));
    };

    const handleEmailInput = (event) => {
        const emailInput = event.target.value.toLowerCase().trim();

        if (emailInput === '') {
            dispatchSignupFormState(updateFormFieldAction('email', emailInput, false, 'Please enter an email address'));

            return;
        }

        if (!isEmail(emailInput)) {
            dispatchSignupFormState(
                updateFormFieldAction('email', emailInput, false, 'Please enter a valid email address')
            );

            return;
        }

        dispatchSignupFormState(updateFormFieldAction('email', emailInput));
    };

    const handlePasswordInput = (event) => {
        const passwordInput = event.target.value.trim();

        if (passwordInput === '') {
            dispatchSignupFormState(
                updateFormFieldAction('password', passwordInput, false, 'Please enter your password')
            );

            return;
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;
        if (!passwordRegex.test(passwordInput)) {
            dispatchSignupFormState(
                updateFormFieldAction(
                    'password',
                    passwordInput,
                    false,
                    'Please enter a password between 8-20 characters with at least 1 capital letter and 1 number'
                )
            );

            return;
        }

        dispatchSignupFormState(updateFormFieldAction('password', passwordInput));
    };

    const handleRepeatedPasswordInput = (event) => {
        const repeatedPasswordInput = event.target.value.trim();

        if (repeatedPasswordInput === '' || repeatedPasswordInput !== signupFormState.values.password) {
            console.log(signupFormState);
            dispatchSignupFormState(
                updateFormFieldAction('repeatedPassword', repeatedPasswordInput, false, 'Please retype your password')
            );

            return;
        }

        dispatchSignupFormState(updateFormFieldAction('repeatedPassword', repeatedPasswordInput));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { firstName, lastName, email, password } = signupFormState.values;

            const res = await signup({ firstName, lastName, email, password });
            const { userID } = res.data;
            updateAuthState(loginAction(userID));
            setUserDataOnSessionStorage({ userID });

            navigate('/tasks');
        } catch (err) {
            const errObj = JSON.parse(err.message);
            if (errObj.status === 400) alert('There is already an account with this email address.');
        }
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <FormInputContainer
                    id="first-name"
                    labelTitle="First Name:"
                    isRequired={true}
                    handleInput={handleFirstNameInput}
                    errorMessage={signupFormState.errorMessages.firstName}
                />

                <FormInputContainer
                    id="last-name"
                    labelTitle="Last Name:"
                    isRequired={true}
                    handleInput={handleLastNameInput}
                    errorMessage={signupFormState.errorMessages.lastName}
                />

                <FormInputContainer
                    id="email"
                    labelTitle="Email:"
                    inputType="email"
                    isRequired={true}
                    handleInput={handleEmailInput}
                    errorMessage={signupFormState.errorMessages.email}
                />

                <FormInputContainer
                    id="password"
                    labelTitle="Password:"
                    inputType="password"
                    isRequired={true}
                    handleInput={handlePasswordInput}
                    errorMessage={signupFormState.errorMessages.password}
                />

                <FormInputContainer
                    id="repeated-password"
                    labelTitle="Repeated Password:"
                    inputType="password"
                    isRequired={true}
                    handleInput={handleRepeatedPasswordInput}
                    errorMessage={signupFormState.errorMessages.repeatedPassword}
                />
            </div>

            <Link to="/login" className="login-link">
                Have an account already? Login...
            </Link>

            <Button type="submit" className="signup-btn" disabled={!signupFormState.isFormValid}>
                Signup
            </Button>
        </form>
    );
};

export default SignupForm;
