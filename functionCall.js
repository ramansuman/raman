//create a function which takes user name as parameter, and greet by their name.
const prompt = require("prompt-sync")();
let userName= prompt("Please enter your Good Name :- ")
function greet(name){
    console.log(`Hello ${name}, wishing you a good day. You have a Good Name`)
}
greet(userName)