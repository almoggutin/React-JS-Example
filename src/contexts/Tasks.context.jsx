import React, { createContext, useReducer } from 'react';

import tasksReducer, { TASKS_INITIAL_STATE } from '../reducers/tasks.reducer';

export const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
    const [tasksState, dispatchTasksState] = useReducer(tasksReducer, TASKS_INITIAL_STATE);

    const value = { tasksState, dispatchTasksState };

    return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>;
};

export default TasksContextProvider;
