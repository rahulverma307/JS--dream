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






