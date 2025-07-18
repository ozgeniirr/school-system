

export abstract class Vehicle {
    brand: string ;
    model: string;
    readonly year: number;

    constructor(brand:string, model: string, year:number){
        this.brand=brand;
        this.model=model;
        this.year=year;
    }

    getInfo(): string {
        return `Aracın markası: ${this.brand} modeli:${this.model}, yılı: ${this.year}`
    }


    abstract getFuelType(): string;
    
}