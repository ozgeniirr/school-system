import { ICustom } from "../../interfaces/ICustom";


export class VipCustomer implements ICustom {
    name:string;

    constructor(name:string){
        this.name=name;
    }


    getDiscountedPrice(price: number): number {
        return price * 0.80
    }
}