import { useState, useRef, useContext } from 'react';
import './add-tasks-form.styles.scss';

import { AuthContext } from '../../../contexts/Auth.context';
import { TasksContext } from '../../../contexts/Tasks.context';
import { addTaskAction } from '../../../actions/tasks.actions';

import Button from '../../../components/button/Button.component';

import { createTask } from '../../../services/tasks.service';

const AddTasksForm = () => {
    const { authState } = useContext(AuthContext);
    const { updateTasksState } = useContext(TasksContext);

    const [isInputValid, setIsInputValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const inputEl = useRef(null);
    const formEl = useRef(null);

    const handleInput = () => {
        const taskInput = inputEl.current.value.trim();

        taskInput === '' ? setIsInputValid(false) : setIsInputValid(true);
        taskInput === '' ? setIsFormValid(false) : setIsFormValid(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const taskInput = inputEl.current.value.trim();

        try {
            const res = await createTask(authState.userID, taskInput);
            const { task } = res.data;

            updateTasksState(addTaskAction(task));

            formEl.current.reset();
        } catch (err) {
            alert('Something went wrong.');
        }
    };

    return (
        <form ref={formEl} className="add-tasks-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input ref={inputEl} type="text" onInput={handleInput} />

                <Button type="submit" className="add-task-btn" disabled={!isFormValid}>
                    Add
                </Button>
            </div>

            {!isInputValid && <div className="error-message">You must add a task</div>}
        </form>
    );
};

export default AddTasksForm;
