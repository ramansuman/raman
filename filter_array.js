// Given the size of array n and an array of strings.
// Return the string having length greater than or equal to 6 by using filter method.
const prompt =require("prompt-sync")();
let num = parseInt(prompt("Enter number of elements required:- "));
console.log("Enter values for created array:- ")
let arr = new Array();
for(let i=0;i<num;i++){
    arr.push(prompt(""))
}
console.log("Created array is :- ")
console.log(arr);
let len=parseInt(prompt("Enter the length of string required :- "))
let arr1=arr.filter((val)=>{
    return val.length<=len;
}
)
console.log(arr1)