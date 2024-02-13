// define a function that converts the temperature from Celsius to Fahrenheit using
// helper function, F = (C x 9/5) + 32
console.log(Fahrenheit(15)) //hoisting, we can use the function before the declaration
function number (num){
    return num * 9/5
}
function Fahrenheit(celcius){
    return number(celcius) + 32;
}