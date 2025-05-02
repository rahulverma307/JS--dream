//this means "this object" — the object where the function is written.


// const user={
//     username:"rahul",
//     price:987,
// this keyword works in JavaScript when used inside an object method.
//     welcomeMessage:function(){
//         console.log(`${this.username},welcome sir ji`);//this keyword current content me video print karta hai
        
//     }
// }
// user.welcomeMessage()
// user.username="vivek"//this.username always looks at the current value of username in the same object.
// user.welcomeMessage()

// function chai(){
//     let username="rahul"
//     console.log(this.username) //this not use in function.only use in object
    
// }
// chai()


//arrow function

const chai = () => {
  let username="rahuke"
  console.log(this.username);//this keyword not work in arrow function 
  
}
chai()

// const addtwo = (num1,num2) =>{
//    return   num1+num2
// }

//implicit return we dont use curly parenthesis
// const addtwo = (num1,num2) => (num1+num2)

const addtwo = (num1,num2) =>({username:"rahul"}) //for object in arrow function

console.log(addtwo(45,45));
