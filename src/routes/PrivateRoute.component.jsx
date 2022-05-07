import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import { getUserFromSessionStorage } from '../utils/storage.utils';

const PrivateRoute = ({ redirectPath, children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const userData = getUserFromSessionStorage();

        if (!userData) navigate(redirectPath);
    }, []);

    return children ? children : <Outlet />;
};

export default PrivateRoute;
