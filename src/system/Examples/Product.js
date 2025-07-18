"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        Product.totalStock += stock;
    }
    getInfo() {
        return `Adı: ${this.name}, fiyatı: ${this.price}, stok bilgisi: ${this.stock}`;
    }
    static getTotalStock() {
        return Product.totalStock;
    }
}
exports.Product = Product;
Product.totalStock = 0;
