//Given an object user . Return the full name of the user.
const prompt =require("prompt-sync")()
const obj = JSON.parse(prompt("Enter a json :- "))
function fullname(obj){
    return obj.name.firstname+ " " + obj.name.lastname
}
console.log(fullname(obj))