import _ from 'lodash';

import tasksActionTypes from '../actions/tasks.actions';

export const TASKS_INITIAL_STATE = [];

const tasksReducer = (state, action) => {
    switch (action.type) {
        case tasksActionTypes.INIT_TASKS: {
            const { tasks } = action.payload;

            return _.cloneDeep(tasks);
        }
        case tasksActionTypes.ADD_TASK: {
            const { task } = action.payload;

            const updatedTasks = _.cloneDeep(state);
            updatedTasks.push(task);

            return updatedTasks;
        }
        case tasksActionTypes.UPDATE_TASK: {
            const { index, completed } = action.payload;

            const updatedTasks = _.cloneDeep(state);
            updatedTasks[index].completed = completed;

            return updatedTasks;
        }
        case tasksActionTypes.DELETE_TASK: {
            const { index } = action.payload;

            const updatedTasks = _.cloneDeep(state);
            updatedTasks.splice(index, 1);

            return updatedTasks;
        }
        default:
            return { ...state };
    }
};

export default tasksReducer;
