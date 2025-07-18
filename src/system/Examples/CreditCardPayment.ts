import { PaymentMethod } from "./PaymentMethod";


export class CreditCardPayment extends PaymentMethod {

    constructor(name:string){
        super(name);
    }

    processPayment(amount: number): string {
        return `${this.name} ile ${amount} kredi kartıyla ödendi.`
    }
}