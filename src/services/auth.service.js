import * as userService from './user.service';

export const login = async (email, password) => {
    const user = userService.findByEmailAndPassword(email, password);
    if (!user) throw new Error(JSON.stringify({ status: 400, statusMessage: 'Bad Request' }));

    return { status: 200, statusText: 'Ok', data: { userID: user._id } };
};

export const signup = async (userData) => {
    if (userService.isEmailUnique(userData.email))
        throw new Error(JSON.stringify({ status: 400, statusMessage: 'Bad Request' }));

    const data = await userService.createUser(userData);

    return { status: 201, statusText: 'Created', data };
};

export const logout = async (userID) => {
    const user = await userService.findUser(userID);
    if (!user) throw new Error(JSON.stringify({ status: 400, statusMessage: 'Bad Request' }));

    return { status: 200, statusText: 'Ok', data: {} };
};
