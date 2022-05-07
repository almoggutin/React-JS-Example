import { v4 as uuidv4 } from 'uuid';

class Task {
    constructor(userID, task, isCompleted = false) {
        this._id = uuidv4();
        this.userID = userID;
        this.task = task;
        this.isCompleted = isCompleted;
    }
}

export default Task;
