import React, { useState, useEffect, useContext } from 'react';
import './tasks-page.styles.scss';

import Loader from '../../components/shared/loader/Loader.component';
import { LOADER_TIMEOUT } from '../../constants/constants';

import { AuthContext } from '../../contexts/Auth.context';
import { TasksContext } from '../../contexts/Tasks.context';
import { initTasksAction } from '../../actions/tasks.actions';

import AddTasksForm from './add-tasks-form/AddTasksForm.component';
import TasksContainer from './tasks-container/TasksContainer.component';

import { getTasks } from '../../services/tasks.service';

const TasksPage = () => {
    const { authState } = useContext(AuthContext);
    const { dispatchTasksState } = useContext(TasksContext);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!authState?.userID) return;

        getTasks(authState.userID).then((res) => {
            const { tasks } = res.data;

            dispatchTasksState(initTasksAction(tasks));

            setTimeout(() => {
                setIsLoading(false);
            }, LOADER_TIMEOUT);
        });
    }, []);

    return isLoading ? (
        <Loader />
    ) : (
        <main className="tasks-page">
            <AddTasksForm />

            <TasksContainer />
        </main>
    );
};

export default TasksPage;
