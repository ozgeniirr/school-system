"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZooManager = void 0;
class ZooManager {
    constructor(animals) {
        this.animals = [];
        this.animals = animals;
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    listAllAnimals() {
        this.animals.forEach((a) => {
            console.log(a.makeSound());
        });
    }
}
exports.ZooManager = ZooManager;
