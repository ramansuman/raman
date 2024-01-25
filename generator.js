// generator gives us the full controll of a function.
// we can traverse a function as we want by using yield(meaning:- pause).
function *generate(){
    // let y = yield // we pass value in yield
    //let x= [yield,yield,yield]
    // console.log(x + "   " + y)
    // yield* ["angular","react","node","vue","Expres"]// yield as a array, we can set any datatype in yield
    //putting a * after yield array, the array will now return their elements one by one
    yield "php"
    yield "java"
    yield "C"
    yield "python"
}
let g= generate();
//passing values will go in sequence
// g.next()// to start the function
// g.next(2) // value will go in first yield
// g.next(true)//value will move to array
// g.next("hello") // we can pass any type of value
// g.next(5)
// g.next(10)
// g.next(30) // this is useless, all the yield have value
// console.log(g.next())
// console.log(g.next())
//we can use spread operator to get all the remaining array elemets at once
// console.log([...g]) // spread operator
// console.log(g.next()) // will return undefined and done true
// now we see the return function of generator
console.log(g.next())
console.log(g.next())
console.log(g.return(23))// return function closes the iteration.
//passing the value will shown in the last iteration, where done value is true.
console.log(g.next())//value undefined, done true