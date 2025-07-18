import { User } from "./User";

export class AdminUser extends User{

    constructor(name:string,  age: number){
        super(name, age);
    }

    introduce(): string {
        return `Ben ${this.name}, sistem yöneticisiyim.`;

        
    }

}