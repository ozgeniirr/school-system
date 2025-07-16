

export class Book{
    title:string;
    author:string;
    readonly isbn:number;


    constructor(title:string, author:string, isbn: number){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }

    displayInfo(): string{
        return `Kitabınadı: ${this.title}, Kitabın yazarı: ${this.author}, isbn: ${this.isbn}`
    }
}