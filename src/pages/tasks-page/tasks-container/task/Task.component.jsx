import React, { useContext, useState, useEffect } from 'react';
import './task.styles.scss';

import { TasksContext } from '../../../../contexts/Tasks.context';
import * as taskActions from '../../../../actions/tasks.actions';

import Button from '../../../../components/button/Button.component';

import * as tasksService from '../../../../services/tasks.service';

const Task = ({ id, index, task, isCompleted }) => {
    const { dispatchTasksState } = useContext(TasksContext);

    const [taskClassName, setTaskClassName] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

    const handleTaskCompletion = async (event) => {
        const checkbox = event.target;
        const isChecked = checkbox.checked;

        try {
            await tasksService.updateTask(id, isChecked);

            dispatchTasksState(taskActions.updateTaskAction(index, isChecked));
            setIsCheckboxChecked(isChecked);
            isChecked ? setTaskClassName('completed') : setTaskClassName('');
        } catch (err) {
            alert('Something went wrong.');
        }
    };

    const handleTaskDeletion = async () => {
        try {
            await tasksService.deleteTask(id);

            dispatchTasksState(taskActions.deleteTaskAction(index));
        } catch (err) {
            alert('Something went wrong.');
        }
    };

    useEffect(() => {
        if (isCompleted) {
            setTaskClassName('completed');
            setIsCheckboxChecked(true);

            return;
        }

        setTaskClassName('');
        setIsCheckboxChecked(false);
    }, []);

    return (
        <div className="task">
            <div className="content">
                <input type="checkbox" checked={isCheckboxChecked} onChange={handleTaskCompletion} />

                <h3 className={taskClassName}>{task}</h3>
            </div>

            <Button type="button" handleClick={handleTaskDeletion}>
                Delete
            </Button>
        </div>
    );
};

export default Task;
