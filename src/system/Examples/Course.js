"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
class Course {
    constructor(name, teacher) {
        this.students = [];
        this.name = name;
        this.teacher = teacher;
    }
    addStudent(student) {
        this.students.push(student);
    }
    listStudents() {
        return this.students.map(s => s.getFullName());
    }
    describe() {
        console.log(`Dersin adı: ${this.name}`);
        console.log(`Öğretmenin Adı: ${this.teacher.getFullName()}`);
        console.log(`Öğrenciler: `);
        this.students.forEach((s, i) => {
            console.log(` ${i + 1}. ${s.getFullName()} ${s.studentId}`);
        });
    }
    ;
}
exports.Course = Course;
;
