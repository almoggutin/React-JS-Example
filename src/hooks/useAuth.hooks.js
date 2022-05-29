import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/Auth.context';

import { LOADER_TIMEOUT } from '../constants/constants';

const useAuth = () => {
    const { authState } = useContext(AuthContext);

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (authState != null) {
            navigate('/tasks');
        }

        setTimeout(() => {
            setIsLoading(false);
        }, LOADER_TIMEOUT);
    }, []);

    return isLoading;
};

export default useAuth;
