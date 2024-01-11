// value swapping in variable
const prompt=require("prompt-sync")();
let val1,val2;
val1= prompt("Enter any value to exchange in variable 'a':- ");
val2= prompt("Enter next value in variable 'b':- ")
function swap(a,b){
    let temp;
    temp=a;
    a=b;
    b=temp;
    return {a,b}; //returning object
}
console.log(swap(val1,val2))