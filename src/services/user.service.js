import * as storageUtils from '../utils/storage.utils';

import User from '../models/user.model';

export const isEmailUnique = (email) => {
    const usersCollection = storageUtils.getUsersCollectionFromSessionStorage();

    const user = usersCollection.find((userDoc) => userDoc.email === email);
    if (user) return true;

    return false;
};

export const createUser = async ({ firstName, lastName, email, password }) => {
    const user = new User(firstName, lastName, email, password);

    storageUtils.addUserToUsersCollectionOnSessionStorage(user);

    return { userID: user._id };
};

export const findUser = async (userID) => {
    const usersCollection = storageUtils.getUsersCollectionFromSessionStorage();

    const user = usersCollection.find((userDoc) => userDoc._id === userID);
    if (!user) return null;

    return user;
};

export const findByEmailAndPassword = (email, password) => {
    const usersCollection = storageUtils.getUsersCollectionFromSessionStorage();

    const user = usersCollection.find((userDoc) => userDoc.email === email && userDoc.password === password);
    if (!user) return null;

    return user;
};
