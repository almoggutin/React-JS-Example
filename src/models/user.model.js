import { v4 as uuidv4 } from 'uuid';

class User {
    constructor(firstName, lastName, email, password) {
        this._id = uuidv4();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}

export default User;
