//goal=> user input:- 1+2*3-4+6, result: 9
const prompt = require("prompt-sync")()
let calc = prompt("Enter the arithmetical problem for calculation:- ")

function arithmetic(input) {
    let len = input.length
    let char = ''
    let arr = []

    function operator(insert) {
        return insert === '+' || insert === '-' || insert === '*' || insert === '/' || insert === '%' || insert === '^'
    }
    for (let i = 0; i < len; i++) { //6+6
        if (operator(input[i])) {
            if (char !== '') { //true because char =6
                arr.push(char) //arr = [6]
                char = ''
            }
            arr.push(input[i])
        } else if (!isNaN(parseFloat(input[i])) || input[i] == '.') {
            char += input[i] //char = 6
        }
    }
    if (char !== '') {
        arr.push(char)
    }
    let coperator = '+'
    let result = 0
    let lengtharr = arr.length
    for (i = 0; i < lengtharr; i++) {
        if (operator(arr[i])) {
            coperator = arr[i]
        } else {
            let num = parseFloat(arr[i])
            if (isNaN(num)) {
                console.log("Please enter a valid number!!!")
            } else {
                switch (coperator) {
                    case '+':
                        result += num;
                        break;
                    case '-':
                        result -= num;
                        break;
                    case '*':
                        result *= num;
                        break;
                    case '/':
                        if (num === 0) {
                            console.log("Number can never be divided by 0")
                            result = "Infinity"
                            break;
                        } else {
                            result /= num;
                            break;
                        }
                        case '%':
                            result = result % num;
                            break;
                        case '^':
                            result = Math.pow(result, num)
                            break;
                }
            }
        }
    }
    return result
}
console.log(`Output is:- ${arithmetic(calc)}`)