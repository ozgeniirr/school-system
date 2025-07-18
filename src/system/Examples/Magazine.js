"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
const Item_1 = require("./Item");
class Magazine extends Item_1.Item {
    constructor(title, publishedYear, available, issueNumber) {
        super(title, publishedYear, available);
        this.issueNumber = issueNumber;
    }
    getInfo() {
        const baseInfo = super.getInfo();
        return `${baseInfo}, Sayı numarası: ${this.issueNumber}`;
    }
}
exports.Magazine = Magazine;
