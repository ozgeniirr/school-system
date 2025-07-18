

export class BankAccount {
    readonly accountNumber: number;
    private _balance : number;


    constructor (accountNumber: number, balance: number) {
        this.accountNumber=accountNumber;
        this._balance=balance;
    }


    get balance(): number {
        return this._balance;
    }


    deposit(amount:number):void {
        if(amount>0){
            this._balance += amount;
        }else{
            throw new Error("Yatırılan tutar pozitif olmalıdır.")
        }

    }

    withdraw(amount: number):void{
        if(amount<=this._balance){
            this._balance -= amount;

        }else{
            throw new Error("Yetersiz bakiye")
        }

    }


}