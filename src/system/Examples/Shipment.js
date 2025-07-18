"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shipment = void 0;
class Shipment {
    constructor(trackingNumber, destination) {
        this.trackingNumber = trackingNumber;
        this.status = "Hazırlanıyor.";
        this.destination = destination;
    }
    getStatus() {
        return `${this.status}`;
    }
    setStatus(newStatus) {
        this.status = newStatus;
    }
}
exports.Shipment = Shipment;
