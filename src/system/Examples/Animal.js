"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    makeSound() {
        return `Animal makes a sound.`;
    }
    getInfo() {
        return `Name: ${this.name}, ${this.age}`;
    }
}
exports.Animal = Animal;
