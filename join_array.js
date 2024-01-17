// Given the size of array n and an array .Write a simple JavaScript program
// to join all elements of the following array into a string using '+' sign in between the elements..
const prompt= require("prompt-sync")()
let num = parseInt(prompt("Enter number of elements in new array :- "))
let arr = new Array()
console.log("Enter elements to be inserted in array :- ")
for(let i=0; i<num;i++){
    let val= prompt("");
    arr.push(val);
}
let ch=prompt("Enter a character or symbol to join the array:- ")
let str= arr.join(ch)
console.log(`After joining the element using ${ch} sign, new string is :- `)
console.log(str)