"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    makeSound() {
        return `${this.name} havlar.`;
    }
}
exports.Dog = Dog;
