import { Vehicle } from "./Vehicle";


export class Car extends Vehicle {
    numberOfDoors : number;

    constructor(brand:string, model:string, year:number, numberOfDoors:number){
        super(brand, model, year);
        this.numberOfDoors=numberOfDoors;
    }

    getInfo(): string {
        const carInfo = super.getInfo();
        return `${carInfo}, Kapı Sayısı: ${this.numberOfDoors}`
    }

    getFuelType(): string {
        return `Elektrikli` 
    }
}