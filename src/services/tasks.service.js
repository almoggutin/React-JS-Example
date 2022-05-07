import * as storageUtils from '../utils/storage.utils';

import Task from '../models/task.model';

export const getTasks = async (userID) => {
    const tasksCollection = storageUtils.getTasksCollectionFromSessionStorage();

    const tasks = tasksCollection.filter((taskDoc) => taskDoc.userID === userID);

    return { status: 200, statusText: 'Ok', data: { tasks } };
};

export const createTask = async (userID, task) => {
    const tasksCollection = storageUtils.getTasksCollectionFromSessionStorage();

    const taskDoc = new Task(userID, task);
    tasksCollection.push(taskDoc);

    storageUtils.updateTasksCollectionOnSessionStorage(tasksCollection);

    return { status: 201, statusText: 'Created', data: { task: taskDoc } };
};

export const updateTask = async (taskID, isCompleted) => {
    const tasksCollection = storageUtils.getTasksCollectionFromSessionStorage();

    const task = tasksCollection.find((taskDoc) => taskDoc._id === taskID);
    task.isCompleted = isCompleted;

    storageUtils.updateTasksCollectionOnSessionStorage(tasksCollection);

    return { status: 200, statusText: 'Ok', data: {} };
};

export const deleteTask = async (taskID) => {
    const tasksCollection = storageUtils.getTasksCollectionFromSessionStorage();

    const updatedTasksCollection = tasksCollection.filter((taskDoc) => taskDoc._id !== taskID);

    storageUtils.updateTasksCollectionOnSessionStorage(updatedTasksCollection);

    return { status: 200, statusText: 'Ok', data: {} };
};
