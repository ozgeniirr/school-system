
export class Item{
    title:string;
    publishedYear: number;
    available: boolean;

    constructor(title:string, publishedYear:number , available: boolean){
        this.title = title;
        this.publishedYear = publishedYear;
        this.available = available;

    }
    
    getAge(): number {
        const currentYear = new Date().getFullYear();
        return currentYear - this.publishedYear;
}


    getInfo(): string {
        return `Kitabın adı: ${this.title}, basım yılı: ${this.publishedYear}`
    }


}