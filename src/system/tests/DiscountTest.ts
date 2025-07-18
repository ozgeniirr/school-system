import { ICustom } from "../../interfaces/ICustom";
import { RegularCustomer } from "../Examples/RegularCustomer";
import { VipCustomer } from "../Examples/VipCustomer";


export function printFinalPrice (customer: ICustom, price:number): void {
    const disc = customer.getDiscountedPrice(price);
    console.log(`${customer.name} adlı müşteriye uygulanan indirimli fiyat:  ${disc}  `)
}

const regular = new RegularCustomer("Alp");
const vip = new VipCustomer("Eren");

printFinalPrice(regular, 100);
printFinalPrice(vip, 500);