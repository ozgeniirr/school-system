"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Aracın markası: ${this.brand} modeli:${this.model}, yılı: ${this.year}`;
    }
}
exports.Vehicle = Vehicle;
