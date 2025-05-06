//if
// const isuserloggedin=false
// if(isuserloggedin){
//    console.log("true is sahi hai");
   
// }else{
//     console.log("galat hai");
    
// }
///==============
// compare operator  <,>,<=,>=,==,!=,===,---> this also check data types
//!==

// if(2==="2"){
//    console.log("executed"); //this also check data types
// }else{
//     console.log("not excuted");
    
// }

// const  temperature=41
// if(temperature<50){
//     console.log("less than 50");
    
// }else{
//     console.log("temperature is greater than 50")
// }

///**  ==========
// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power=${power}`); 
// }

// //agar hamne condition ke andar kuch declare kiya hai to vo bhar use nahi hoge==agar "var" hoga to bhar bhi use ho sakta hai
// console.log(`user power=${power}`);

//=* ham direct bhi likh sakt hai, this is called implicit scope we assume that ,only excute in one line
// const balance=1000
// if(balance>500) console.log("test"),// hame coma lagakar multiple line me bhi likh sakte hia
// console.log("test 2");// this inreadable code this is not good coding practice

///==nested elsse if=====
// const balance=1000
// if(balance<500){
//   console.log("less than");
  
// }else if(balance<750){
//     console.log("less than");
// }else if(balance<900){
//     console.log("less than");
// }else{
//     console.log("less than 1200"); 
// }

//==real life use===
// const userLoggedIn=true
// const debitCard=true
// const phoneCover=true
// const  loggedinFromemail=false
// if(userLoggedIn && debitCard && phoneCover ){// for two or more condition check we use &&,if one condiotn is false than code not run .give else code
//     console.log("allow to by courses");
    
// }
// if(userLoggedIn || loggedinFromemail){
//    console.log("user logegd in");//  or  if one condition true then code run
// }

//// Switch=== basic syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
// const month=3
// // agar 3 ki jagah string hoti to  likee "march" thrn value bhi string me deni hai like "jan" "feb" "march"
// switch (month) {
//     case 1:
//          console.log("jan");
//         break;
//     case 2:
//         console.log("feb");
//         break;
//     case 3:
//     console.log("march");
//         break;
//     case 4:
//     console.log("april");
//         break;//break control flow ko break kardeta hai
//     case 5:
//     console.log("may");
//     break;

//     default: 
//     console.log("not mention");
    
//         break;
// }


//truthy or falsey value
// const useremail=[]///agar empty string hoti to not have answer ata
// if(useremail){
//     console.log("have");
    
// }else{
//     console.log("not have");
// }

////falsyy value== assume hone vali valye hai
//false,0,-0,BigInt 0n,"",null,undefined,Nan== all are falsy value

////truthy value==
//"0","false"," " [],{},function(){},string andar 0 value hia to vo true hia

//check array is empty or not

// if(useremail.length === 0){
//     console.log("array is empty"); 
// }



///Nullis coalescing operator (??): null undefined

// let val1; 
// // val1=5??10//5

// // val1=null??10//10

// // val1=undefined??15//undefined
// // val1=undefined??null//null
// console.log((val1));

//ternary operatot

// condition ? true:false


