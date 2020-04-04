import {GeneralPeople} from "./GeneralPeople";
import {studentInfo} from "./StudentInfo";
import * as _ from 'lodash';

var genPeople : GeneralPeople = new GeneralPeople("Indian","30",true);
var student: studentInfo  = genPeople.fillStudentDetails('Rishi','07IT417',7,true);

var studentFullName = student.getFullName();

console.log("studentFullName::::::"+studentFullName);

var mylist:number[] = [];
mylist.push(1);
mylist.push(2);
mylist.push(3);
mylist.push(4);
mylist.push(5);

console.log("Actual List is :::::::"+mylist.toString());

var reverselist:number[] = _.reverse(mylist);

console.log("reverselist List is :::::::"+reverselist.toString());



