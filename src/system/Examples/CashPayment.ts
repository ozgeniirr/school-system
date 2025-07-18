import { PaymentMethod } from "./PaymentMethod";


export class CashPayment extends PaymentMethod {

    constructor(name:string){
        super(name);

    }

    processPayment(amount: number): string {
        return `${this.name} ile ${amount} nakit ödendi.`
    }
}