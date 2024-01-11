// Given a string having all letters in lowercase .
// Return string by making its first letter in uppercase.
const prompt=require("prompt-sync")();
const str = prompt("Enter a string to make first letter capial")
function caps(a){
    return a.charAt(0).toUpperCase()+a.substr(1);
}
console.log(caps(str));