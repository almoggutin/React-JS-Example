import authActionTypes from '../actions/auth.actions';

export const AUTH_INITIAL_STATE = null;

const authReducer = (state, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN: {
            const { userID } = action.payload;

            return { userID };
        }
        case authActionTypes.LOGOUT: {
            return AUTH_INITIAL_STATE;
        }
        default:
            return { ...state };
    }
};

export default authReducer;
