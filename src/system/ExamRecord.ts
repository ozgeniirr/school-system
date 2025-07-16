


















export class ExamRecord {

    public studentName: string;
    private score : number;
    protected grade: string;

    constructor(studentName:string, score:number, grade:string, ){
        this.studentName=studentName;
        this.score=score;
        this.grade=grade;

    }

    getScore():number{
        return this.score;
    }
    getGrade():string {
        return this.grade;
    }


}