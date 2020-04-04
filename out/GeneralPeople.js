"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentInfo_1 = require("./StudentInfo");
var GeneralPeople = /** @class */ (function () {
    function GeneralPeople(nationality, age, isStudent) {
        this.nationality = nationality;
        this.age = age;
        this.isStudent = isStudent;
    }
    GeneralPeople.prototype.fillStudentDetails = function (name, id, rank, isPass) {
        return new StudentInfo_1.studentInfo(name, id, rank, isPass);
    };
    return GeneralPeople;
}());
exports.GeneralPeople = GeneralPeople;
