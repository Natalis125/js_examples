
const fruits = ["apple", "banana", "pear", "avocado"];

//for (let index = 0; index < fruits.length; index++) {
    //console.log(fruits[index]);
    
//}

//for (let index = 1; index <= 10; index++) {
   // console.log(index);
//}

//for (let x in fruits){
    //console.log(fruits[x]);
//}

//const car = {type: "mazda", color: "red", plateNumber: 12345};
//for (let x in car){
    //console.log(car[x]);
//}

for (let x in fruits){
    console.log(fruits[x]);
    if(fruits[x]== "avocado"){
        console.log("I did not know that avocado is a fruit!!!");
    }
}