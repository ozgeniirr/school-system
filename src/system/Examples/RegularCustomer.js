"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegularCustomer = void 0;
class RegularCustomer {
    constructor(name) {
        this.name = name;
    }
    getDiscountedPrice(price) {
        return price * 0.95;
    }
}
exports.RegularCustomer = RegularCustomer;
