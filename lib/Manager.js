var Employee = require("./Employee");
var officeNumber = require("../app")

// TODO: Write code to define and export the Manager class

class Manager extends Employee {
    constructor(name,id,email){
        super(name,id,email)
        this.officeNumber = officeNumber
    }

    getRole() {return "Manager"}

}

module.exports = Manager;