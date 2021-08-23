const Manager = require("../lib/Manager");

describe('Manager', () => {
    it("instantiates new manager instance", () => {
        const manager = new Manager();
        expect(typeof(manager)).toBe('object');
    });

    it("constructor takes in a name, id, email and officeNumber", () => {
        const name = "JavaScript";
        const id = "M93";
        const email = "javaScript@manager.com";
        const officeNumber = "5860"
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.name).toBe(name);
        expect(manager.id).toBe(id);
        expect(manager.email).toBe(email);
        expect(manager.officeNumber).toBe(officeNumber);
    });

    it("receives officeNUmber, role via methods", () => {
        const officeNumber = "4161";
        const role = 'Manager'
        const manager = new Manager("Inquirer", "M2021", "inquierer@gmail.com", officeNumber);

        expect(manager.getOfficeNumber()).toBe(officeNumber);
        expect(manager.getRole()).toBe(role);
    });
});