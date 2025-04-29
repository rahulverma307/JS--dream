///// OBJECT///


// singleton agar hame object literals ki trah karte hai to singleton nahi banta hai.
//agar constructor se banega to hamesa singleton banega


//object literals


const mySym=Symbol("key1");  // for use symmbol,, important for intrveiw


const jsUser={
    name:"Rahul Verma",
    age:25,
    [mySym]:"mykey1", // important for intrview
    "last name":"verma",//we can not acces by using .dot method and we can only acces by [ square braces method]
    location:"jaipur",
    email:"rahul.google",
    isLoggedIn:false,
   lastLofinDyas:["Monday","Sunday"] 

}
// we acces use both method
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["last name"]);
console.log( jsUser[mySym]);

// for object value change

jsUser.email="vivek@gmail.com" // valu change

// for value lock value can not changes
Object.freeze(jsUser)// this method stop from changes
console.log(jsUser);



// function

jsUser.greeting= function(){
    console.log("hello, namaste");
    
}
jsUser.greeting2= function(){
    console.log(`hello js user what is your name: ${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());


//day 2

// //const tinderUser=new Object()  =>this is singleton object
const tinderUser={}
tinderUser.id="123"
tinderUser.name="rahul"
tinderUser.isLoggined=false

console.log(Object.keys(tinderUser));//output are in array=>[ 'id', 'name', 'isLoggined' ]
console.log(Object.values(tinderUser));//[ '123', 'rahul', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123' ], [ 'name', 'rahul' ], [ 'isLoggined', false ] ]

console.log(tinderUser.hasOwnProperty("name"));//=> true  ///Determines whether an object has a property with the specified name.






// console.log(tinderUser);

const regularUser={
    email:"rahul@gmail",
    fullname:{
        userfullanme:{
            firstname:"rahul",
            lastname:"verma"
        }
    }
}
console.log(regularUser.fullname.userfullanme.firstname);//rahul for acces in object we increse .dot with inner object name 

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const lastobj={...obj1,...obj2}// use spread for merge two different array
console.log(lastobj);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//other method

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



////object inside array

const users=[
    {
     id:1,
     email:"h@gmail.com"   
    },
    {

    },
    {

    },
    {

    },
]
 
const print=users[1].email;
console.log(print);










