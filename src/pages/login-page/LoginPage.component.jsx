import './login-page.styles.scss';

import useAuth from '../../hooks/useAuth.hooks';

import Loader from '../../components/shared/loader/Loader.component';
import Card from '../../components/card/Card.component';
import LoginForm from './login-form/LoginForm.component';

const LoginPage = () => {
    const isLoading = useAuth();

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
