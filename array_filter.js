let arr = new Array(2,40,33,24); // another way to create array
let arr1 = arr.filter((value,index,array)=>{// returns new array with condition applied
    return value>10 // condition if passes, returns the array
})
console.log(arr1);