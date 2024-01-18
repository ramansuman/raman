//set is a type of object having unique values, similar to arrays having value, value pair
let set= new Set(['a','b','c','a','c','d','e']); //creating by passing array
set.add('f') // adding element using add method
let x= "raman"
set.add(x)
let text= "";
set.forEach(function(value){
    text+=value
    text+=" "
})
console.log(text)
let arr = [1,2,3,4,3,2,1,0]
let set1 = new Set(arr) // passing an array to set function it will convert array into set
console.log(set1)
let itterator = set.values() //values create a iterator of set values
let val ="" 
for(const entry of itterator){ //entry is a variable indicating each value of set
    val+=entry
}
console.log(val)
let ent = set.entries() // entries passes value, value pair
let tex=""
for(const entry1 of ent){
    tex+= '('+ entry1+ ')'
    // console.log(tex)
}
console.log(tex)
console.log(typeof(set))
console.log(set.size)
set.delete('b')//removes an element
console.log(set)
console.log(set.has("raman")) //returns boolean value if an element found or not
set.clear() //clears a set
console.log(set.size) //returns 0 because of clear method