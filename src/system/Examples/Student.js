"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(firstName, lastName, age, studentId) {
        super(firstName, lastName, age);
        this.studentId = studentId;
    }
    introduce() {
        return `Merhaba ben ${this.getFullName()}, öğrenci numaram: ${this.studentId}`;
    }
}
exports.Student = Student;
