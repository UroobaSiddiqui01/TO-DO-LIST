#! /usr/bin/env node
import inquirer from "inquirer";
let fruitchat = ["Banana", "Apple", "orang"];
// .push()  //.pop()
fruitchat.push("kivi", "mango", "papaya");
// fruitchat.pop();
console.log(fruitchat);
let todos = []; // shapper[]
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your Todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: " Do you want to add more ?",
            default: "false"
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
