

export abstract class PaymentMethod {
    name: string;

    constructor(name:string){
        this.name=name;
    }


    abstract processPayment(amount:number):string;

}