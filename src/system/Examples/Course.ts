import { Teacher } from "./Teacher";
import { Student } from "./Student";

 export class Course {
    name:string;
    teacher: Teacher;
    students: Student[] = [];

    constructor(name:string, teacher:Teacher) {
        this.name=name;
        this.teacher=teacher;
    }

    addStudent(student: Student){
        this.students.push(student);
    }

    listStudents(): string [] {
        return this.students.map(s=> s.getFullName());
    }


    describe(): void {
        console.log(`Dersin adı: ${this.name}`);
        console.log(`Öğretmenin Adı: ${this.teacher.getFullName()}`);
        console.log(`Öğrenciler: `);
        this.students.forEach((s , i)=> {
            console.log(` ${i + 1}. ${s.getFullName()} ${s.studentId}`)
        });
    };
 };
