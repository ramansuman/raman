//for in loop and for of loop:-
//for in loop is used to iterate over index of array and properties of object
//for of loop is used to iterate over the value of arrat and values of object properties
//**************** for in loop *******************
let arr= [1,2,3,4,5,4,5,6]
let obj ={
    name:"raman",
    age: 24,
    subject: "Javascript",
    course: "Web Development"
}
for (let i in arr){ // returns index of array
    // console.log(i)
}
for(let x in obj){// returns all the properties of object
    // console.log(x)
}
for(let y in obj){
    // console.log(`${y} => ${obj[y]}`) //obj.y will not work, because y is string. it should be passed inside square bracket
    //using key properties to print values
}
for(let index in arr){
    // console.log(`${index} => ${arr[index]}`) // using index to print value
}
//******************** for of loop *******************
for (let a of arr){
    console.log(a) // printing values of array
}
for (let b of Object.keys(obj)){ //Object.keys is the property to iterate over keys of object
    console.log(obj[b])
}
//we can easily access the keys using for in loop.
// to access the value of object we should use for in loop for ease.