import { IPerson } from "../interfaces/IPerson";


export class Person implements IPerson {
  firstName: string;
  lastName: string;
  age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  introduce(): string {
  return `Ben ${this.getFullName()}, ${this.age} yaşındayım.`;
}

}
