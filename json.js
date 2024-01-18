//json is javascript object notation, it is similar to js object in soo many ways.
//we use json to transfer data.json can be created by other programming languages also
//we can not define methods in json, we have to put keys in double quotes (" ")
const json={        //json object
    "name":"raman",
    "roll":40,
    "age":24
}
console.log(json.roll) // we can access value using '.' notation
//json array
const jsonarr=[
    {"name":"raman","age":24},
    {"name":"shraddha","age":25},
    {"name":"swati","age":32}
]
console.log(jsonarr[0].name)//we can access the json array by index value
//we can convert json into object and vice versa
const obj= {
    "name":"raman",
    "roll":40,
    "age":24
}
let jsondata= JSON.stringify(obj); // converting js object into json
console.log(jsondata)
let obj1=JSON.parse(jsondata) //converted json into js object
console.log(obj1.name)