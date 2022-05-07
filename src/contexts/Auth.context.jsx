import React, { createContext, useReducer } from 'react';

import authReducer, { AUTH_INITIAL_STATE } from '../reducers/auth.reducer';

import { getUserFromSessionStorage } from '../utils/storage.utils';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const userData = getUserFromSessionStorage();
    const [authState, dispatchAuthState] = useReducer(authReducer, userData || AUTH_INITIAL_STATE);

    const value = { authState, dispatchAuthState };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
