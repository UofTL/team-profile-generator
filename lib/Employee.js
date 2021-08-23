//const validator = require('email-validator');
// Employee class  with constructor 
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    //get call and return the employee
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        // if (validator.validate(this.email)) {
        //     console.log('Email is valid');
        // } else {
        //     console.log('Email is invalid');
        // }
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
}

// export module
module.exports = Employee;