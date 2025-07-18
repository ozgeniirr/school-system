"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const Item_1 = require("./Item");
class Book extends Item_1.Item {
    constructor(title, publishedYear, available, author, isbn) {
        super(title, publishedYear, available);
        this.author = author;
        this.isbn = isbn;
    }
    getInfo() {
        return `Kitabınadı: ${this.title}, Kitabın yazarı: ${this.author}, Basım Yılı: ${this.publishedYear}, isbn: ${this.isbn}, Stok durumu: ${this.available}`;
    }
}
exports.Book = Book;
