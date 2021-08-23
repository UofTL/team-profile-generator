const Intern = require("../lib/Intern");

describe('Intern', () => {
    it("instantiates new intern instance", () => {
        const intern = new Intern();
        expect(typeof(intern)).toBe('object');
    });

    it("constructor takes in a name, id, email and school", () => {
        const name = "Html-Body";
        const id = "I11";
        const email = "html@UofT.com";
        const school = 'UofT'
        const intern = new Intern(name, id, email, school);

        expect(intern.name).toBe(name);
        expect(intern.id).toBe(id);
        expect(intern.email).toBe(email);
        expect(intern.school).toBe(school);
    });

    it("receives school, role via methods", () => {
        const school = "University of Toronto";
        const role = 'Intern'
        const intern = new Intern("CloneRepo", "I25", "clone-repo@universityoftoronto.com", school);

        expect(intern.getSchool()).toBe(school);
        expect(intern.getRole()).toBe(role);
    });
});