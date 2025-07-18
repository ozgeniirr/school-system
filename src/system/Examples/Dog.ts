import { IAnimal } from "../../interfaces/IAnimal";


 export class Dog implements IAnimal {
    name:string;
    age: number;

    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    }

    makeSound(): string {
        return `${this.name} havlar.`
    }
}