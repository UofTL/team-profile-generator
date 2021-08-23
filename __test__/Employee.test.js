const Employee = require("../lib/Employee");

describe('Employee', () => {
    it("instantiates new employee instance", () => {
        const obj = new Employee();
        expect(typeof(obj)).toBe('object');
    });

    it("constructor takes in a name, id, and email", () => {
        const name = "Anyone";
        const id = "E0821";
        const email = 'anyoned@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.name).toBe(name);
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
    });

    it("receives name, id, email, role via methods", () => {
        const name = 'JSON';
        const id = "E921";
        const email = 'JSON@gmail.com';
        const role = 'Employee'
        const employee = new Employee(name, id, email);

        expect(employee.getName()).toBe(name);
        expect(employee.getId()).toBe(id);
        expect(employee.getEmail()).toBe(email);
        expect(employee.getRole()).toBe(role);
    });
});