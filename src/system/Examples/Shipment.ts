import { ITrackable } from "../../interfaces/ITrackable";


export abstract class Shipment implements ITrackable{
    readonly trackingNumber: string;
    protected status: string;
    public destination: string;


    constructor(trackingNumber:string, destination:string){
        this.trackingNumber= trackingNumber;
        this.status="Hazırlanıyor.";
        this.destination=destination;
    }


    getStatus():string {
        return `${this.status}`
    }

    setStatus(newStatus : string): void {
        this.status=newStatus;

    }

    abstract process():string ;
}