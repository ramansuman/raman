//iterator is a function which we can use to get the full access of any object like string, array, object, etc
let number = [10, 20, 30]
// let val = number[Symbol.iterator](); //[Symbol.iterator]() function helps to make an array, string and objects to convert
// it as a iterator. using iterator, we gain full access of iteration.
// console.log(val.next().value) we can write any line of code in between the iteration. like:-
//console.log("hello")
// console.log(val.next().value)
// console.log(val.next().value)
// console.log(val.next().value)
// console.log(val.next().value)
// let iter =  val.next() 
// while(!iter.done){ //creating loop to iterate over values itself.
//     console.log(iter.value) // it is not convention in practicle, because we can use for of loop for ease.
//     iter =  val.next()
// }
// creating our own iterator(user defined iterator):-
function numIter(arr) {
    let ind = 0
    return {
        next() {
            if (ind < arr.length) {
                return {
                    value: arr[ind++],
                    done: false
                }
            } else {
                return {
                    value: arr[ind++],
                    done: true
                }
            }
        }
    }
}
let iter = numIter(number)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next().value)
console.log(iter.next())