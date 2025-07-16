import { ITeacher } from "../interfaces/ITeacher";
import { Person } from "../system/Person";


export class Teacher extends Person implements ITeacher{
    branch: string;

    constructor(firstName: string, lastName: string, age: number, branch:string){
        super(firstName, lastName, age);
        this.branch = branch
    }

    introduce(): string {
        return `Merhaba ben ${this.getFullName()}, benim branşım : ${this.branch}`
    }
}