

export class Product {
    name:string;
    price:number;
    stock: number;
    static totalStock: number= 0;

    constructor(name: string, price: number, stock: number){
        this.name=name;
        this.price=price;
        this.stock=stock;
        Product.totalStock += stock;
    }



    getInfo(): string {
        return`Adı: ${this.name}, fiyatı: ${this.price}, stok bilgisi: ${this.stock}`
 
    }

    static getTotalStock():number{
        return Product.totalStock;
    }


}