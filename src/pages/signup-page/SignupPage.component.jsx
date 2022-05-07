import React from 'react';
import './signup-page.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';
import useLoader from '../../hooks/useLoader.hook';

import Card from '../../components/card/Card.component';
import SignupForm from './signup-form/SignupForm.component';

const SignupPage = () => {
    const isLoading = useLoader();

    return isLoading ? (
        <Loader />
    ) : (
        <main className="signup-page">
            <Card className="signup-page-card">
                <h1>Hello New User!</h1>

                <SignupForm />
            </Card>
        </main>
    );
};

export default SignupPage;
