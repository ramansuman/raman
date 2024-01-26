// program to calculate positive numbers only
// if the user enters a negative number, that number is skipped from calculation
// negative number -> loop terminate
// non-numeric character -> skip iteration
const prompt=require("prompt-sync")()
let numarr=[]
let input=0;
while(true){
    input= parseFloat(prompt("Enter a positive number to sum.(** -ve number will stop program **):- "))
    if(input<0){
        console.log("Entered a negative number. program stopped!!!")
        break;
    }
    else if(input>0){
        numarr.push(input)
    }
    else if(isNaN(input)){
        console.log("Error!!! (Entered a String value)")
        continue;
    }
}
let result = 0;
for (let val of numarr){
    result+=val;
}
console.log(`Sum is:- ${result}`);