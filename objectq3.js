//Name along with maximum marks in subjects as Max marks and find total marks
//then divide it by given numbers. Input will be the number and passed as argument along with object.
let user = [{
    "firstName": "Raghu",
    "lastName": "Anand",
    "subjects": [{
        "name": "Maths",
        "marks": 94
    }, {
        "name": "Science",
        "marks": 67
    }, {
        "name": "Hindi",
        "marks": 64
    }]
}, {
    "firstName": "Ram",
    "lastName": "Singh",
    "subjects": [{
        "name": "Maths",
        "marks": 84
    }, {
        "name": "Science",
        "marks": 84
    }, {
        "name": "Hindi",
        "marks": 91
    }]
}]
const prompt =require("prompt-sync")()
const number=parseInt(prompt("Enter a number to get Total marks divided by that number:- "))
function need(arr,num){
    let array = new Array()
    const length=arr.length
    let Name,maxarr=[],total=0,max
    for(i=0;i<length;i++){
        Name= arr[i].firstName + " " + arr[i].lastName
        let len=arr[i].subjects.length
        for(let j=0;j<len;j++){
            total+=arr[i].subjects[j].marks
            maxarr.push(arr[i].subjects[j].marks)
        }
        max=Math.max(...maxarr)// ... is spread operator transform array into each element
        maxarr=[]
        array.push({Name,'Total Marks':total/num,'Max Marks':max})
        total=0
    }
    return array
}
console.log(need(user,number))