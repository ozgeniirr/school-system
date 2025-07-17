import { Course } from "./Course";
import { Student } from "../system/Student";
import { Teacher } from "../system/Teacher";
import { IPerson } from "../interfaces/IPerson";
import { Person } from "./Person";
import { ExamRecord } from "./ExamRecord";
import { StudentScore } from "./StudentScore";
import { StudentInfo } from "./StudentInfo";
import { AdminUser } from "./AdminUser";
import { Book } from "./Book";
import { Magazine } from "./Magazine";
import { Library } from "./Library";
import { Lion } from "./Lion";


const st = new Student("özge", "Can",25, "12345")
console.log(st.introduce());

const br = new Teacher("Keziban", "Can", 55, "Sınıf")
console.log(br.introduce());


const teacher = new Teacher ("Erdoğan", "Can", 55, "Sınıf");
const student1 = new Student("Özge", "Can", 24, "12345");
const student2 = new Student("Beyza", "Can", 27, "54321");


const course = new Course("Türkçe", teacher);
course.addStudent(student1);
course.addStudent(student2);

console.log(course.listStudents());

course.describe();


const users: IPerson [] = [
    new Person ("Fatma", "Karaca", 18),
    new Student ("Furkan", "Karaca", 24, "56789"),
    new Teacher ("Beyza", "Gündoğdu", 25, "Matematik")

];

users.forEach(user => {
    console.log(user.introduce());
});

const exam = new ExamRecord("Özge", 92, "A");

console.log(exam.studentName);   // ✔️ Erişilebilir
console.log(exam.getScore());    // ✔️ Erişilebilir
console.log(exam.getGrade());    // ✔️ Erişilebilir

// console.log(exam.score);     // ❌ HATA: private
// console.log(exam.grade);     // ❌ HATA: protected
const s = new StudentScore("Özge", 95);

console.log(s.Score);

s.Score =110;
console.log(s.Score);

s.Score= 85;
console.log(s.Score);


console.log(StudentInfo.schoolName);

StudentInfo.changeSchoolName("Anadolu Lisesi");

console.log(StudentInfo.schoolName);

const a = new StudentInfo("Özge", 15);
console.log(a.name);
console.log(a.age);

console.log(StudentInfo.schoolName);

const Admin = new AdminUser("Özge", 25);

console.log(Admin.introduce());

const b = new Book("Tutunamayanlar", 2000, true, "Oğuz Atay", 23849023)
//console.log(b.getInfo());
//b.isbn= 36546376;
const m = new Magazine("Kafka", 2024, true, 543)
//console.log(m.getInfo());


const lib = new Library();

lib.addItem(b);
lib.addItem(m);
lib.listItems();

const Li = new Lion("Simba", 4, "lion", 10)

console.log(Li.getInfo());
console.log(Li.makeSound());