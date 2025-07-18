import { Course } from "../Examples/Course";
import { Student } from "../Examples/Student";
import { Teacher } from "../Examples/Teacher";
import { IPerson } from "../../interfaces/IPerson";
import { Person } from "../Examples/Person";
import { ExamRecord } from "../Examples/ExamRecord";
import { StudentScore } from "../Examples/StudentScore";
import { StudentInfo } from "../Examples/StudentInfo";
import { AdminUser } from "../Examples/AdminUser";
import { Book } from "../Examples/Book";
import { Magazine } from "../Examples/Magazine";
import { Library } from "../Examples/Library";
import { Lion } from "../Examples/Lion";
import { BankAccount } from "../Examples/BankAccount";
import { Car } from "../Examples/Car";
import { PaymentMethod } from "../Examples/PaymentMethod";
import { CreditCardPayment } from "../Examples/CreditCardPayment";
import { CashPayment } from "../Examples/CashPayment";
import { Dog } from "../Examples/Dog";
import { ZooManager } from "../Examples/ZooManager";
import { Product } from "../Examples/Product";
import { AirShipment } from "../Examples/AirShipment";



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

const hp = new BankAccount(12345, 1000)

console.log(hp.balance);

hp.deposit(500);
console.log(hp.balance);

hp.withdraw(300);
console.log(hp.balance);

try{
    hp.deposit(-100);
    console.log(hp.balance);

}catch(error:any){
    console.log(error.message);

}


try{
    hp.withdraw(2000);
    console.log(hp.balance);

}catch(error:any){
    console.log(error.message);
}


const car1 = new Car ("Toyota", "Corolla", 2022, 4)

console.log(car1.getInfo());

const myCar = new Car("Tesla", "Model3", 2025, 4);
console.log(myCar.getFuelType());


const payments : PaymentMethod[]= [
    new CreditCardPayment("Visa"),
    new CashPayment("Elden")
];

for(const payment of payments) {
    console.log(payment.processPayment(500));
}

const dog1 = new Dog("Karabaş", 3);
console.log(dog1.makeSound());

const saffet = new Dog("Saffet", 3);

const zoo = new ZooManager([]);
zoo.addAnimal(saffet);

zoo.listAllAnimals(); 


const p1 = new Product("Kalem", 5, 100);
const p2 = new Product("Silgi", 2, 50);

console.log(p1.getInfo());
console.log(p2.getInfo());

console.log("Toplam Stok:", Product.getTotalStock());


const cargo = new AirShipment("TR12345", "İstanbul", "THY");

console.log(cargo.getStatus());        // Hazırlanıyor.
cargo.setStatus("Uçakta");
console.log(cargo.getStatus());        // Uçakta

console.log(cargo.process());          // Gönderi THY ile işleniyor.


