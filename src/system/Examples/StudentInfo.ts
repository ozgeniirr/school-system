
export class StudentInfo{
    public name: string;
    public age:number;
    static schoolName: string;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age; 
    }


    static changeSchoolName(newName:string):void {
        StudentInfo.schoolName= newName;
    }
}
