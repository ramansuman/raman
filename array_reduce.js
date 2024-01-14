let arr = new Array(); // creation new array
arr.push(12,32,32,1224,54,34); //pushesh all the values in array
// console.log(arr);
let sum= arr.reduce((v1,v2)=>{//v1 is initial value and v2 is next value.
    // in next itteration v1 is output and v2 is 3rd value and so on.
    return v1+v2 // any calculation done one by one to all elements.
})
console.log(sum);