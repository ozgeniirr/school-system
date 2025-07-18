"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Course_1 = require("../Examples/Course");
const Student_1 = require("../Examples/Student");
const Teacher_1 = require("../Examples/Teacher");
const Person_1 = require("../Examples/Person");
const ExamRecord_1 = require("../Examples/ExamRecord");
const StudentScore_1 = require("../Examples/StudentScore");
const StudentInfo_1 = require("../Examples/StudentInfo");
const AdminUser_1 = require("../Examples/AdminUser");
const Book_1 = require("../Examples/Book");
const Magazine_1 = require("../Examples/Magazine");
const Library_1 = require("../Examples/Library");
const Lion_1 = require("../Examples/Lion");
const BankAccount_1 = require("../Examples/BankAccount");
const Car_1 = require("../Examples/Car");
const CreditCardPayment_1 = require("../Examples/CreditCardPayment");
const CashPayment_1 = require("../Examples/CashPayment");
const Dog_1 = require("../Examples/Dog");
const ZooManager_1 = require("../Examples/ZooManager");
const Product_1 = require("../Examples/Product");
const AirShipment_1 = require("../Examples/AirShipment");
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
const b = new Book_1.Book("Tutunamayanlar", 2000, true, "Oğuz Atay", 23849023);
//console.log(b.getInfo());
//b.isbn= 36546376;
const m = new Magazine_1.Magazine("Kafka", 2024, true, 543);
//console.log(m.getInfo());
const lib = new Library_1.Library();
lib.addItem(b);
lib.addItem(m);
lib.listItems();
const Li = new Lion_1.Lion("Simba", 4, "lion", 10);
console.log(Li.getInfo());
console.log(Li.makeSound());
const hp = new BankAccount_1.BankAccount(12345, 1000);
console.log(hp.balance);
hp.deposit(500);
console.log(hp.balance);
hp.withdraw(300);
console.log(hp.balance);
try {
    hp.deposit(-100);
    console.log(hp.balance);
}
catch (error) {
    console.log(error.message);
}
try {
    hp.withdraw(2000);
    console.log(hp.balance);
}
catch (error) {
    console.log(error.message);
}
const car1 = new Car_1.Car("Toyota", "Corolla", 2022, 4);
console.log(car1.getInfo());
const myCar = new Car_1.Car("Tesla", "Model3", 2025, 4);
console.log(myCar.getFuelType());
const payments = [
    new CreditCardPayment_1.CreditCardPayment("Visa"),
    new CashPayment_1.CashPayment("Elden")
];
for (const payment of payments) {
    console.log(payment.processPayment(500));
}
const dog1 = new Dog_1.Dog("Karabaş", 3);
console.log(dog1.makeSound());
const saffet = new Dog_1.Dog("Saffet", 3);
const zoo = new ZooManager_1.ZooManager([]);
zoo.addAnimal(saffet);
zoo.listAllAnimals();
const p1 = new Product_1.Product("Kalem", 5, 100);
const p2 = new Product_1.Product("Silgi", 2, 50);
console.log(p1.getInfo());
console.log(p2.getInfo());
console.log("Toplam Stok:", Product_1.Product.getTotalStock());
const cargo = new AirShipment_1.AirShipment("TR12345", "İstanbul", "THY");
console.log(cargo.getStatus()); // Hazırlanıyor.
cargo.setStatus("Uçakta");
console.log(cargo.getStatus()); // Uçakta
console.log(cargo.process()); // Gönderi THY ile işleniyor.
