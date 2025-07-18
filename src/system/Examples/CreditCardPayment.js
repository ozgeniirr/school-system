"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardPayment = void 0;
const PaymentMethod_1 = require("./PaymentMethod");
class CreditCardPayment extends PaymentMethod_1.PaymentMethod {
    constructor(name) {
        super(name);
    }
    processPayment(amount) {
        return `${this.name} ile ${amount} kredi kartıyla ödendi.`;
    }
}
exports.CreditCardPayment = CreditCardPayment;
