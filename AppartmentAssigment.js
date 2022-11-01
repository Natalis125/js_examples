function getDetails(appartment_object){
        let result = "The appartment on "+ appartment_object.address + ", "+ appartment_object.city + 
        " cost "+ appartment_object.price + " and has "+ appartment_object.rooms.length+ " rooms in total";
        return result;
    }


const appartment1 = {
    city:"New-York",
    address:"5th Avenue",
    price: "5000 dollars",
    rooms:["master bedroom", "kids room", "bedroom3","bedroom4", "bedroom5", 
    "office1", "office2","office3", "office4","office5"],

    //getDetails: function(){
        //let result = "The appartment on "+ this.address + ", "+ this.city + " cost "+ this.price + 
        //" and has "+ this.rooms.length+ " rooms in total";
        //return result;
    //}
}

const appartment2 = {
    city:"Toronto",
    address:"3th Avenue",
    price: "3000 dollars",
    rooms:["master bedroom", "kids room", "bedroom3","bedroom4", 
    "office1", "office2","office3", "office4","office5"],
    
}
console.log(getDetails(appartment1));
console.log(getDetails(appartment2));
    
