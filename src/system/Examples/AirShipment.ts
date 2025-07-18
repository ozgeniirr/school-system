import { Shipment } from "./Shipment";


export class AirShipment extends Shipment {
    airLine: string;

    constructor(trackingNumber:string, destination:string, airLine:string){
        super(trackingNumber, destination)
        this.airLine=airLine;
    }

    process(): string {
        return `Gönderi ${this.airLine} ile işleniyor.`
    }
}