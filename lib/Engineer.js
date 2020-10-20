const Engineer = require('../lib/Employee');

// TODO: Write code to define and export the Employee class

class Engineer {
    constructor(name,id,email){
        super(name,id,email)
        this.github = officeNumber
    }

    getGitHub() {return this.github}
    getRole() {return "Engineer"}

}

module.exports = Engineer;