const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    it("instantiates new engineer instance", () => {
        const engineer = new Engineer();
        expect(typeof(engineer)).toBe('object');
    });

    it("constructor takes in a name, id, email and github", () => {
        const name = "Bootstrap";
        const id = "EN72";
        const email = "bootstrap-css@gmail.com";
        const github = "bootstrap-css"
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.name).toBe(name);
        expect(engineer.id).toBe(id);
        expect(engineer.email).toBe(email);
        expect(engineer.github).toBe(github);
    });

    it("receives github, role via methods", () => {
        const github = "Node-js";
        const role = 'Engineer'
        const engineer = new Engineer("Jest-Module", "EN126", "jest-module@gmail.com", github);

        expect(engineer.getGithub()).toBe(github);
        expect(engineer.getRole()).toBe(role);
    });
});