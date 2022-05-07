const authActionTypes = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
};

export const loginAction = (userID) => ({
    type: authActionTypes.LOGIN,
    payload: {
        userID,
    },
});

export const logoutAction = () => ({
    type: authActionTypes.LOGOUT,
});

export default authActionTypes;
