// try concat, splice and slice
let arr = [10,20,30,40,50,60,70]
let arr1 = [1,2,3,4,5,6,7]
let concat_arr = arr1.concat(arr); //creates new array with existing once. here arr1 will recide first
// console.log(concat_arr);
arr.splice(1,0,30);// splice modifies the existing array, 1st parameter is index 
//where to add or remove data, 2nd parameter is the number of value to be deleted
//if 2nd parameter is 0 then no values is going to be deleted.
//3rd and on going parameters are the values to be added
//it returns the deleted value
console.log(arr)
let valarr= arr.splice(1,3)// demostrating the return type
console.log(valarr)
console.log(arr)

//slice returns new modified array without changing the existing once
let newarr= arr1.slice(1,5);// slice returns a new array with 1st parameter is the staring index,
// 2nd parameter is the index untill there the value is taken to returned array
// if we only pass the 1st parameter then all the elements starting from the passed inde to last will returned
console.log(newarr)