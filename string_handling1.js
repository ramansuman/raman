//Given a string containing character "a" having each letter in lowercase.
//Return string by replacing all character "a" with "m" and make all characters in uppercase.
const prompt=require("prompt-sync")();
let str=prompt("Enter a string having letter a:- ")
let choice;
console.log(`CHOICES TO REPLACE:- 
1. To replace all the 'a' in the string with 'm'
2. To replace first 'a' found in string with 'm'
3. To replace all the 'a' and 'A' with 'M'`)
choice=parseInt(prompt("Enter your choice:- "))
function replace(x,ch){
    if(ch==1){
        return x.replaceAll('a','m').toUpperCase();
    }
    else if(ch==2){
        return x.replace('a','m').toUpperCase()
    }
    else if(ch==3){
        return x.toUpperCase().replaceAll('A','M');
    }
    else{
        return "Invalid Choice"
    }
}
console.log(replace(str,choice));