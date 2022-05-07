import { useState, useEffect } from 'react';

import { LOADER_TIMEOUT } from '../constants/constants';

const useLoader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, LOADER_TIMEOUT);
    }, []);

    return isLoading;
};

export default useLoader;
