// Given an integer n. Return the factorial of integer by using map and reduce method.
const prompt = require("prompt-sync")();
let num = parseFloat(prompt("Enter a number to find its Factorial :- "))
let arr = new Array();
if(num==0){
    arr.push(1);
}
for(let i=1;i<=num;i++)
{
    arr.push(i);// creating an array using entered input
}
let fact = arr.reduce((val,val1)=>{ //reduce function performs action with 1st and 2nd value of array
    // in the next itteration 3rd value will be val1 and val will be the outcome of 1st itteration
    return val*val1;
})
console.log(`Factorial of ${num} is ${fact}`);
//remove error message while pressing enter