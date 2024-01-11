//js file to reverse user input value
const prompt=require("prompt-sync")();
const str=prompt("Enter a string to reverse:- ");
let choice;
console.log(`How you want your output?
1:- reverse word by word
2:- reverse letter by letter`);
choice=parseInt(prompt("Enter your choice :- "));
function reverse(a,n){
    if(n==1){
    return a.split(" ").reverse().join(" ");
    }
    else if(n==2){
        return a.split("").reverse().join("");
    }
    else
    {
        const def="Wrong choice"
        return def;
    }
}
console.log(reverse(str,choice));