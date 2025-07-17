"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(title, publishedYear, available) {
        this.title = title;
        this.publishedYear = publishedYear;
        this.available = available;
    }
    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.publishedYear;
    }
    getInfo() {
        return `Kitabın adı: ${this.title}, basım yılı: ${this.publishedYear}`;
    }
}
exports.Item = Item;
