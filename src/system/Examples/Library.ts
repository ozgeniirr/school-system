import { Item } from "./Item";






export class Library {
    private items : Item [] = [] ;

    addItem(item: Item):void {
        this.items.push(item)
    }

    listItems():void {
        this.items.forEach((t, i) => {
            console.log(`${i + 1}, ${t.getInfo()}, ${t.getAge()}`)
        })
    }

}