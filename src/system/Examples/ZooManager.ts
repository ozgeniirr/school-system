import { IAnimal } from "../../interfaces/IAnimal";


export class ZooManager {
    private animals: IAnimal[] = []

    constructor(animals:IAnimal[]){
        this.animals=animals;
    }


    addAnimal(animal: IAnimal): void {
        this.animals.push(animal);
    }
    listAllAnimals(): void {
        this.animals.forEach((a) => {
        console.log(a.makeSound());
    });
}

}