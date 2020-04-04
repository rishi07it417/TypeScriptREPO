"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentInfo = /** @class */ (function () {
    function studentInfo(name, id, rank, isPass) {
        this.name = name;
        this.id = id;
        this.rank = rank;
        this.isPass = isPass;
    }
    ;
    studentInfo.prototype.getFullName = function () {
        return this.name + "**" + this.id;
    };
    studentInfo.prototype.checkTopperStudent = function (student) {
        if (student.rank <= 3) {
            return "Student is Topper";
        }
        else if (student.rank > 3 && student.rank <= 10) {
            return "Student is decent";
        }
        else {
            return "Student is average";
        }
    };
    return studentInfo;
}());
exports.studentInfo = studentInfo;
