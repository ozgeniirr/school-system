"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirShipment = void 0;
const Shipment_1 = require("./Shipment");
class AirShipment extends Shipment_1.Shipment {
    constructor(trackingNumber, destination, airLine) {
        super(trackingNumber, destination);
        this.airLine = airLine;
    }
    process() {
        return `Gönderi ${this.airLine} ile işleniyor.`;
    }
}
exports.AirShipment = AirShipment;
