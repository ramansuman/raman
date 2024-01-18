//an object is a combination of key and value pair
let my_obj={
    name:"raman",
    height:5.5,
    weight: 72,
    marks:{science:80,
    ssc:70,
    maths:75,
    computer:85},
    my_weight:function(){
        let surname="suman"
        console.log(`${this.name} ${surname}'s weight is ${this.weight}`) //this keyword is used to accesss
        //those values which are defined within the object and outside the function
        //we can normally access variables which resides within the function
    }
}
console.log(my_obj.weight)
console.log(my_obj["marks"]["ssc"])  //accessing object keys using bracket notation
// we need to pass keys within double quotes (" ")
console.log(my_obj.marks.maths)//we can access values by using '.' notation
my_obj.my_weight(); //we can just call the function to execute it