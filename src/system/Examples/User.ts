

export abstract class User {
    name: string;
    age: number;


    constructor(name:string, age: number){
        this.name = name;
        this.age = age;
    }

    abstract introduce (): string
}