"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
class Library {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    listItems() {
        this.items.forEach((t, i) => {
            console.log(`${i + 1}, ${t.getInfo()}, ${t.getAge()}`);
        });
    }
}
exports.Library = Library;
