//Given the size of array n and an array of strings.Write Javascript program to 
//return an array whose elements is in uppercase of words present in the original array.
const prompt=require("prompt-sync")()
let num=parseInt(prompt("Enter the required length of array :- "))
let arr= new Array()
console.log("Enter elements of array, must be String value in smaller case :- ")
for(let i=0; i<num;i++){
    arr.push(prompt(""))   
}
console.log("The created array is :- ")
console.log(arr);
let arr1= arr.map((val)=>{
    return val.toUpperCase()
})
console.log("New array with upper case letters is :- ")
console.log(arr1)