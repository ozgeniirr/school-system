import { Item } from "./Item";


export class Book extends Item {
    author:string;
    readonly isbn:number;


    constructor( title:string, publishedYear: number, available:boolean, author:string, isbn: number){
        super(title,publishedYear,available )
        this.author= author;
        this.isbn = isbn;
    }

    getInfo(): string{
        return `Kitabınadı: ${this.title}, Kitabın yazarı: ${this.author}, Basım Yılı: ${this.publishedYear}, isbn: ${this.isbn}, Stok durumu: ${this.available}`
    }
}