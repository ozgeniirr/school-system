"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentInfo = void 0;
class StudentInfo {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static changeSchoolName(newName) {
        StudentInfo.schoolName = newName;
    }
}
exports.StudentInfo = StudentInfo;
