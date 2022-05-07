import * as constants from '../constants/constants';

export const setUserDataOnSessionStorage = (userData) => {
    sessionStorage.setItem(constants.USER_DATA, JSON.stringify(userData));
};

export const removeUserDataFromSessionStorage = () => {
    sessionStorage.removeItem(constants.USER_DATA);
};

export const getUserFromSessionStorage = () => {
    const jsonUserData = sessionStorage.getItem(constants.USER_DATA);
    if (jsonUserData == null) return null;

    const userData = JSON.parse(jsonUserData);
    return userData;
};

export const createUsersCollectionOnSessionStorage = () => {
    if (sessionStorage.getItem(constants.USERS_COLLECTION)) return;

    const jsonUsersCollection = JSON.stringify([]);
    sessionStorage.setItem(constants.USERS_COLLECTION, jsonUsersCollection);
};

export const getUsersCollectionFromSessionStorage = () => {
    const jsonUsersCollection = sessionStorage.getItem(constants.USERS_COLLECTION);

    const usersCollection = JSON.parse(jsonUsersCollection);
    return usersCollection;
};

export const addUserToUsersCollectionOnSessionStorage = (user) => {
    const usersCollection = getUsersCollectionFromSessionStorage();
    usersCollection.push(user);

    const jsonUsersCollection = JSON.stringify(usersCollection);
    sessionStorage.setItem(constants.USERS_COLLECTION, jsonUsersCollection);
};

export const createTasksCollectionOnSessionStorage = () => {
    if (sessionStorage.getItem(constants.TASKS_COLLECTION)) return;

    const jsonTasksCollection = JSON.stringify([]);
    sessionStorage.setItem(constants.TASKS_COLLECTION, jsonTasksCollection);
};

export const getTasksCollectionFromSessionStorage = () => {
    const jsonTasksCollection = sessionStorage.getItem(constants.TASKS_COLLECTION);

    const TasksCollection = JSON.parse(jsonTasksCollection);
    return TasksCollection;
};

export const updateTasksCollectionOnSessionStorage = (tasksCollection) => {
    const jsonTasksCollection = JSON.stringify(tasksCollection);

    sessionStorage.setItem(constants.TASKS_COLLECTION, jsonTasksCollection);
};
