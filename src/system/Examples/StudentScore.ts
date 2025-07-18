

export class StudentScore {
    public name: string;
    private _score: number;


    constructor(name:string, initialScore:number){
        this.name = name;
        this._score = initialScore;
    }

    get Score():number{
        return  this._score;

    };

    set Score(value:number){
        if(value <0 || value >100){
            console.log("Geçersiz not 0-100 arası olmalı")
        }else{
            this._score=value;
        }

    }

    


}