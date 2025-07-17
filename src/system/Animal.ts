

export class Animal{
   public name:string;
    protected age:number;
    private species:string;

    constructor(name:string, age:number, species:string){
        this.name=name;
        this.age=age;
        this.species=species;
    }


    makeSound(): string {
        return `Animal makes a sound.`
    }

    getInfo(): string {
        return `Name: ${this.name}, ${this.age}`
    }
}