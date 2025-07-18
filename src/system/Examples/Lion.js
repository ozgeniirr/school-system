"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lion = void 0;
const Animal_1 = require("./Animal");
class Lion extends Animal_1.Animal {
    constructor(name, age, species, roarLevel) {
        super(name, age, species);
        this.roarLevel = roarLevel;
    }
    makeSound() {
        return ` Lions roar loudly!`;
    }
    getInfo() {
        const li = super.getInfo();
        return `${li}, ${this.roarLevel}`;
    }
}
exports.Lion = Lion;
