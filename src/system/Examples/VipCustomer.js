"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VipCustomer = void 0;
class VipCustomer {
    constructor(name) {
        this.name = name;
    }
    getDiscountedPrice(price) {
        return price * 0.80;
    }
}
exports.VipCustomer = VipCustomer;
