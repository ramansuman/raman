//chat gpt answer for calculating arithmetic problem through string
const prompt = require("prompt-sync")()
function calculateArithmeticExpression(input) {
    const tokens = [];
    let currentToken = '';

    // Helper function to check if a character is an operator
    function isOperator(char) {
        return char === '+' || char === '-' || char === '*' || char === '/';
    }
    // Iterate through each character in the input
    for (const char of input) {
        if (isOperator(char)) {
            // If the current token is not empty, add it to the tokens array
            if (currentToken !== '') {
                tokens.push(currentToken);
                currentToken = '';
            }
            // Add the operator as a separate token
            tokens.push(char);
        } else if (!isNaN(parseFloat(char)) || char === '.') {
            // If the character is a digit or a decimal point, add it to the current token
            currentToken += char;
        }
    }

    // If the last token is not empty, add it to the tokens array
    if (currentToken !== '') {
        tokens.push(currentToken);
    }

    let result = 0;
    let currentOperator = '+';

    // Perform the calculations using the tokens array
    for (const token of tokens) {
        if (isOperator(token)) {
            // Update the current operator
            currentOperator = token;
        } else {
            // Parse the number and perform the operation
            const number = parseFloat(token);

            if (isNaN(number)) {
                return 'Error: Invalid number';
            }

            switch (currentOperator) {
                case '+':
                    result += number;
                    break;
                case '-':
                    result -= number;
                    break;
                case '*':
                    result *= number;
                    break;
                case '/':
                    if (number !== 0) {
                        result /= number;
                    } else {
                        return 'Error: Division by zero';
                    }
                    break;
                default:
                    return 'Error: Invalid operator';
            }
        }
    }

    return result;
}

// Example usage
const userInput = prompt('Enter an arithmetic expression:');
const output = calculateArithmeticExpression(userInput);
console.log('Output:', output);