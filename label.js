//using labelled break and conitnue.
//using break will exit from that scope of code, exits from the curly braces. used to stop the running iteration
//continue statement is used to skip an iteration
var output = '';
row: for (var i = 1; i <= 3; i++) {
    col: for (var j = 1; j <= i; j++) {
        if((i===2) && (j===1)){
            // continue col
            break col  
        }
        console.log(`i: ${i}  j:${j}`);
    }
}