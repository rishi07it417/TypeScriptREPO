import { studentInfo } from "./StudentInfo";


export class GeneralPeople{
    private nationality : string;
    private age : string;
    private isStudent : boolean;

    constructor(nationality:string, age:string, isStudent:boolean){
        this.nationality = nationality;
        this.age = age;
        this.isStudent = isStudent;
    }

    public fillStudentDetails(name:string,id:string,rank:number,isPass:boolean): studentInfo{
            return new studentInfo(name,id,rank,isPass);  
    }

    
}

