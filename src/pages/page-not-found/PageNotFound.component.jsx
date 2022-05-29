import { useNavigate } from 'react-router-dom';
import './page-not-found.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';
import useLoader from '../../hooks/useLoader.hook';

const PageNotFound = () => {
    const navigate = useNavigate();

    const isLoading = useLoader();

    const handleClick = () => navigate('/');

    return isLoading ? (
        <Loader />
    ) : (
        <main className="page-not-found">
            <h1>404</h1>

            <button type="button" onClick={handleClick}>
                Go Back Home
            </button>
        </main>
    );
};

export default PageNotFound;
