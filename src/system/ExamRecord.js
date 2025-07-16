"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamRecord = void 0;
class ExamRecord {
    constructor(studentName, score, grade) {
        this.studentName = studentName;
        this.score = score;
        this.grade = grade;
    }
    getScore() {
        return this.score;
    }
    getGrade() {
        return this.grade;
    }
}
exports.ExamRecord = ExamRecord;
