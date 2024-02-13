// we needed to order monitors for everyone in an office and this office is conveniently 
//arranged in a grid shape. We could use a function to help us calculate the number of monitors 
//needed!
const prompt = require("prompt-sync")();
let rows = parseInt(prompt("Enter the no of rows in the grid of office :- "))
let columns = parseInt(prompt("Enter the no of columns in the grid of office :- "))
function monitorCount(rows,columns){
    return rows*columns
}
const numOfMonitors = monitorCount(rows,columns)
console.log(`The number of monitor needed in office is :- ${numOfMonitors}`)