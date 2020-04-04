export class studentInfo{

    private name : string;
    readonly id : string;
    private rank : number;
    private isPass : boolean;

    constructor(name:string,id:string,rank:number,isPass:boolean){
        this.name = name;
        this.id = id;
        this.rank = rank;
        this.isPass = isPass;
    };

    public getFullName():string{
        return this.name +"**" +this.id;
    }

    protected checkTopperStudent(student:studentInfo):string{
        if(student.rank <=3){
            return "Student is Topper";
        }else if(student.rank >3 && student.rank <=10){
            return "Student is decent";
        }else{
            return "Student is average";
        }
    }

}

