"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const Vehicle_1 = require("./Vehicle");
class Car extends Vehicle_1.Vehicle {
    constructor(brand, model, year, numberOfDoors) {
        super(brand, model, year);
        this.numberOfDoors = numberOfDoors;
    }
    getInfo() {
        const carInfo = super.getInfo();
        return `${carInfo}, Kapı Sayısı: ${this.numberOfDoors}`;
    }
    getFuelType() {
        return `Elektrikli`;
    }
}
exports.Car = Car;
