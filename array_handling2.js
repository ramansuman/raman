// try delete, sort and reverse
let arr = new Array(1,2,3,4,5,6,7,8,9,10,11,12,13);
delete arr[11] // deletes elment at the given position and modifies the existing array
// console.log(arr)
let arr1= [5,4,9,1,43,12,322,41,5666,32,2];
arr1.sort();//sort alphabatically and modifies the existing array
console.log(arr1)
let arr2= [43,23,55,67,12,23,54,21,35]
function sortFunc(a, b){
    return a-b
}
arr2.sort(sortFunc)
console.log(arr2);
arr.reverse();
console.log(arr);