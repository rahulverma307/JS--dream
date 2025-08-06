////////////////////Jai Shree Ram

// objects in js

// Create a unique symbol with the description "key1"
let mysym = Symbol("key1"); 

const jsuser = {
    name: "rahul verma",           // normal property with string key
    "last name": "verma",          // property with space in key, so written in quotes
    [mysym]: "key2",               // using symbol as a key – unique and hidden key
    age: 18,                       // number value
    location: "jaipur",           // string value
    emial: "rahl@898898.com"      // string value (note: "email" is misspelled)
};

// console.log(jsuser["last name"]);  // Output: verma

// Accessing the value of the symbol-keyed property
// console.log(jsuser[mysym]);        // Output: key2


jsuser.emial="vivek@"// for vlue change
// Object.freeze(jsuser)// protect from change
// console.log(jsuser);

// jsuser.greeting=function(){
//     console.log("jai shree ram");
// }
// console.log(jsuser.greeting());

jsuser.greeting2=function(){
    // console.log(`heloo my name is:${this.name}`);
    
}
// console.log(jsuser.greeting2());


///part two 


/// singleton object

const tinder=new Object()

//non singleton object

const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="rahul verma"
tinderuser.isLoggedin=false
tinderuser.gender="male"
tinderuser.color="like"

// console.log(tinderuser);

const regularuser={//nested object
    username:{
        fullname:{
            username:{
                firstname:"rahul",
                lastname:"verma"
            }
        }
    }
}
// console.log(regularuser.username.fullname.username.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b",}
const obj3={5:"a",6:"b"}

const obj4=Object.assign({},obj1,obj2,obj3)// use for combine all object and we also us spread operator
// console.log(obj4);
const obj5={...obj1,...obj2,...obj3}
console.log(obj5);












