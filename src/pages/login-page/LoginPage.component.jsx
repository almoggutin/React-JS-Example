import React from 'react';
import './login-page.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';
import useLoader from '../../hooks/useLoader.hook';

import Card from '../../components/card/Card.component';
import LoginForm from './login-form/LoginForm.component';

const LoginPage = () => {
    const isLoading = useLoader();

    return isLoading ? (
        <Loader />
    ) : (
        <main className="login-page">
            <Card className="login-page-card">
                <h1>Welcome Back!</h1>

                <LoginForm />
            </Card>
        </main>
    );
};

export default LoginPage;
