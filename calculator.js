//goal=> user input:- 1+2*3-4+6, result: 9
const prompt = require("prompt-sync")()
let calc = prompt("Enter the arithmetical problem for calculation:- ")
function arithmetic (input){
    let len=input.length
    let char='';
    function operator(insert){
        return insert==='+'||insert==='-'||insert==='*'||insert==='/'
    }
    for(let i=0;i<len;i++)
    {
        if(operator(input[i])){
            
        }
    }
}
console.log(`Output is:- ${arithmetic(calc)}`)