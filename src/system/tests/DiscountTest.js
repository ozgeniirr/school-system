"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFinalPrice = printFinalPrice;
const RegularCustomer_1 = require("../Examples/RegularCustomer");
const VipCustomer_1 = require("../Examples/VipCustomer");
function printFinalPrice(customer, price) {
    const disc = customer.getDiscountedPrice(price);
    console.log(`${customer.name} adlı müşteriye uygulanan indirimli fiyat:  ${disc}  `);
}
const regular = new RegularCustomer_1.RegularCustomer("Alp");
const vip = new VipCustomer_1.VipCustomer("Eren");
printFinalPrice(regular, 100);
printFinalPrice(vip, 500);
