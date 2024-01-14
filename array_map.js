let arr= [3,2,4,44,32,122];
let arr1 = arr.map((value,index,array)=>{ //map function passes three arguments value, index amd array
    //any modification will create a new array with all the modification
    return value+'1';
})
console.log(arr);
console.log(arr1);