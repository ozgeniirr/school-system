"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentScore = void 0;
class StudentScore {
    constructor(name, initialScore) {
        this.name = name;
        this._score = initialScore;
    }
    get Score() {
        return this._score;
    }
    ;
    set Score(value) {
        if (value < 0 || value > 100) {
            console.log("Geçersiz not 0-100 arası olmalı");
        }
        else {
            this._score = value;
        }
    }
}
exports.StudentScore = StudentScore;
