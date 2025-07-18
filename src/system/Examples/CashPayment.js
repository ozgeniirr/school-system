"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashPayment = void 0;
const PaymentMethod_1 = require("./PaymentMethod");
class CashPayment extends PaymentMethod_1.PaymentMethod {
    constructor(name) {
        super(name);
    }
    processPayment(amount) {
        return `${this.name} ile ${amount} nakit ödendi.`;
    }
}
exports.CashPayment = CashPayment;
