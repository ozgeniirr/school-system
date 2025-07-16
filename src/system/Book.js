"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    displayInfo() {
        return `Kitabınadı: ${this.title}, Kitabın yazarı: ${this.author}, isbn: ${this.isbn}`;
    }
}
exports.Book = Book;
