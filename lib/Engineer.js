var Employee = require("./Employee");

// TODO: Write code to define and export the Employee class

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email)
        this.github = github
    }

    getGithub() {return this.github}
    getRole() {return "Engineer"}

}

module.exports = Engineer;