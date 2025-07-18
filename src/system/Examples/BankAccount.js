"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this._balance += amount;
        }
        else {
            throw new Error("Yatırılan tutar pozitif olmalıdır.");
        }
    }
    withdraw(amount) {
        if (amount <= this._balance) {
            this._balance -= amount;
        }
        else {
            throw new Error("Yetersiz bakiye");
        }
    }
}
exports.BankAccount = BankAccount;
