"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = require("./Course");
const Student_1 = require("../system/Student");
const Teacher_1 = require("../system/Teacher");
const Person_1 = require("./Person");
const ExamRecord_1 = require("./ExamRecord");
const StudentScore_1 = require("./StudentScore");
const StudentInfo_1 = require("./StudentInfo");
const AdminUser_1 = require("./AdminUser");
const Book_1 = require("./Book");
const st = new Student_1.Student("özge", "Can", 25, "12345");
console.log(st.introduce());
const br = new Teacher_1.Teacher("Keziban", "Can", 55, "Sınıf");
console.log(br.introduce());
const teacher = new Teacher_1.Teacher("Erdoğan", "Can", 55, "Sınıf");
const student1 = new Student_1.Student("Özge", "Can", 24, "12345");
const student2 = new Student_1.Student("Beyza", "Can", 27, "54321");
const course = new Course_1.Course("Türkçe", teacher);
course.addStudent(student1);
course.addStudent(student2);
console.log(course.listStudents());
course.describe();
const users = [
    new Person_1.Person("Fatma", "Karaca", 18),
    new Student_1.Student("Furkan", "Karaca", 24, "56789"),
    new Teacher_1.Teacher("Beyza", "Gündoğdu", 25, "Matematik")
];
users.forEach(user => {
    console.log(user.introduce());
});
const exam = new ExamRecord_1.ExamRecord("Özge", 92, "A");
console.log(exam.studentName); // ✔️ Erişilebilir
console.log(exam.getScore()); // ✔️ Erişilebilir
console.log(exam.getGrade()); // ✔️ Erişilebilir
// console.log(exam.score);     // ❌ HATA: private
// console.log(exam.grade);     // ❌ HATA: protected
const s = new StudentScore_1.StudentScore("Özge", 95);
console.log(s.Score);
s.Score = 110;
console.log(s.Score);
s.Score = 85;
console.log(s.Score);
console.log(StudentInfo_1.StudentInfo.schoolName);
StudentInfo_1.StudentInfo.changeSchoolName("Anadolu Lisesi");
console.log(StudentInfo_1.StudentInfo.schoolName);
const a = new StudentInfo_1.StudentInfo("Özge", 15);
console.log(a.name);
console.log(a.age);
console.log(StudentInfo_1.StudentInfo.schoolName);
const Admin = new AdminUser_1.AdminUser("Özge", 25);
console.log(Admin.introduce());
const b = new Book_1.Book("Tutunamayanlar", "Oğuz Atay", 123456);
console.log(b.displayInfo());
