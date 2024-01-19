// Given an array user having multiple object . Return full name as Name along with the subject marks
// as Marks for each students as an array of objects. User and subject name will be 
// passed as argument and subject name will be taken as input.
let user = [ 
{ "firstName":"Raghu",
  "lastName":"Anand",
  "marks":
  { "Maths":98, "Science":64, "Hindi":90 } },
{ "firstName":"Ram",
  "lastName":"Singh", 
  "marks":
  { "Maths":99, "Science":72, "Hindi":94 } }, 
{ "firstName":"Shayam", 
  "lastName":"Sharma", 
  "marks":
  { "Maths":80, "Science":80, "Hindi":70 } } 
]
const prompt =require("prompt-sync")()
let sub=prompt("Enter the name of subject to ge the marks of that subject with user name :- ")
let arr= new Array()
arr= user.map((val)=>{
    let Name = val.firstName + " " + val.lastName
    let Marks = val.marks[sub]
    return({Name,Marks})
})
console.log(arr)