import { Item } from "./Item";


export class Magazine extends Item {
    issueNumber: number;

    constructor(title:string, publishedYear: number, available:boolean, issueNumber: number){
        super(title, publishedYear, available);
        this.issueNumber=issueNumber;
    }


    getInfo(): string {
        const baseInfo = super.getInfo();
        return `${baseInfo}, Sayı numarası: ${this.issueNumber}`
    }


}
