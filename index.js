#! /usr/bin/env node 
import inquirer from "inquirer";
// Student Manangment System:
class Studentinfo {
    name;
    age;
    isfeePaid;
    ID;
    school;
    course;
    constructor(n, Age, Fee, id, sc, course) {
        this.name = n;
        this.age = Age;
        this.isfeePaid = Fee;
        this.ID = id;
        this.school = sc;
        this.course = course;
    }
}
let UniqueId = 100;
let condition = true;
while (condition) {
    let answer = await inquirer.prompt([
        {
            name: "nam",
            type: "input",
            message: " Enter student name"
        },
        {
            name: "age",
            type: "number",
            message: "student age"
        },
        {
            name: "fee",
            type: "list",
            message: "student fee is paid?",
            choices: ["Yes", "No"]
        },
        {
            name: "sch",
            type: "list",
            message: "student College Name",
            choices: ["GIAIC", "PIAIC"]
        },
        {
            name: "course",
            type: "list",
            message: "Select Student Course",
            choices: ["Cloud Computing", "Web 3.O", "Meta Verse", "AI", "Block Chain"]
        },
        {
            name: "ask",
            type: "confirm",
            message: "Add more students Data"
        }
    ]);
    UniqueId++;
    let studentData = new Studentinfo(answer.nam, answer.age, answer.fee, UniqueId, answer.sch, answer.course);
    console.log("\n", studentData);
    condition = answer.ask;
}
