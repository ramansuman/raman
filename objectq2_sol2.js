//Input: Maths
// Output:
// [ { Name: 'Raghu Anand', Marks: 98 }, { Name: 'Ram Singh', Marks: 99 }, { Name: 'Shayam Sharma', Marks: 80 } ]
//solution by self
let user = [{
        "firstName": "Raghu",
        "lastName": "Anand",
        "marks": {
            "Maths": 98,
            "Science": 64,
            "Hindi": 90
        }
    },
    {
        "firstName": "Ram",
        "lastName": "Singh",
        "marks": {
            "Maths": 99,
            "Science": 72,
            "Hindi": 94
        }
    },
    {
        "firstName": "Shayam",
        "lastName": "Sharma",
        "marks": {
            "Maths": 80,
            "Science": 80,
            "Hindi": 70
        }
    }
]
const prompt = require("prompt-sync")()
const sub = prompt("Enter a sunject name to get full name and matks:- ")

function need(array, subject) {
    let arr = new Array()
    let length = array.length
    let Name;
    for (i = 0; i < length; i++) {
        Marks = array[i].marks[subject]
        Name = array[i].firstName + " " + array[i].lastName
        arr.push({
            Name,
            Marks
        })
    }
    return arr
}
console.log(need(user, sub))