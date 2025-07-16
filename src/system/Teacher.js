"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const Person_1 = require("../system/Person");
class Teacher extends Person_1.Person {
    constructor(firstName, lastName, age, branch) {
        super(firstName, lastName, age);
        this.branch = branch;
    }
    introduce() {
        return `Merhaba ben ${this.getFullName()}, benim branşım : ${this.branch}`;
    }
}
exports.Teacher = Teacher;
