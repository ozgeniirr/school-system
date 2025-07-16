import { IStudent } from "../interfaces/IStudent";
import { Person } from "../system/Person";


export class Student extends Person implements IStudent {
    studentId:string;


    constructor(firstName: string, lastName: string, age:number, studentId:string){
        super( firstName,lastName, age );
        this.studentId=studentId;

    }

    introduce(): string {
        return `Merhaba ben ${this.getFullName()}, öğrenci numaram: ${this.studentId}`
    }
}