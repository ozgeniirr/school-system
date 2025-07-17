import { Animal } from "./Animal";


export class Lion extends Animal {
    roarLevel: number;

    constructor(name:string, age:number, species:string, roarLevel:number){
        super(name, age, species)
        this.roarLevel=roarLevel;
    }

    makeSound(): string {
        return ` Lions roar loudly!`
    }

    getInfo(): string {
        const li = super.getInfo();
        return `${li}, ${this.roarLevel}`
    }

}