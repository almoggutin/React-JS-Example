const tasksActionTypes = {
    INIT_TASKS: 'INIT_TASKS',
    ADD_TASK: 'ADD_TASK',
    UPDATE_TASK: 'UPDATE_TASK',
    DELETE_TASK: 'DELETE_TASK',
};

export const initTasksAction = (tasks) => ({
    type: tasksActionTypes.INIT_TASKS,
    payload: {
        tasks,
    },
});

export const addTaskAction = (task) => ({
    type: tasksActionTypes.ADD_TASK,
    payload: {
        task,
    },
});

export const updateTaskAction = (index, isCompleted) => ({
    type: tasksActionTypes.UPDATE_TASK,
    payload: {
        index,
        isCompleted,
    },
});

export const deleteTaskAction = (index) => ({
    type: tasksActionTypes.DELETE_TASK,
    payload: {
        index,
    },
});

export default tasksActionTypes;
