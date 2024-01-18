// map is a type of object which can have any datatype as its key.
// map remembers the actual order of insertion of key
//map is always having a key=>vlaue pair
let map = new Map ([[0,2,],['BCA',3]]) //creating map using multidimentional array.
// first value is key and 2nd value is vlaue
map.set(true,"Raman") // set method is used to insert new value to map
map.set("BCA",7.8) //this value will show in 2nd place. map always remember the order of insertion of key.
console.log(map)
console.log(map.get(("BCA"))) // for getting value
//same keys can never occur twice, the values of same keys will overwrite
let entry = map.entries() //creates a iterator for every entry(conbination of key and value)
let text= ""
for(const ent of entry){ //ent is iterator for each key and value of every iteration
    text+='('+ent+')'
}
console.log(text)
let value = map.values() // iterator for evry vlaue of map
let text1 =""
for(const val of value){
    text1+= '('+val+')'
}
console.log(text1)
let key = map.keys() // iterator for every key of map
let text2=""
for(const keyx of key){
    text2+= '('+keyx+')'
}
console.log(text2)
console.log(map.size)
map.clear()
console.log(map.size)