//loops

//for
// let array=[2,4,5,7,8,9,45]
// for (let index = 0; index < array.length; index++) { //curly braces means block generated
//     const element = array[index];
//     console.log(element);
// }
//conditioninside loops
// for(let i=1;i<=10;i++){
//     console.log(i);
//     if(i==5){
//         console.log("five is arrived",[i]); 
//     }
// }//we can not acces outside braces

// loops inside loops
// for(let i=0;i<=10;i++){
//     console.log(`outer loop${i}`);
    
//     for(let j=0;j<=10;j++){
//    console.log(`innerloop value${j} and Table of${i*j}`);
   
//     }
// }

//  break and continue

// for (let index = 1; index <=20; index++) {
//    console.log(`value of i is:${index}`);
//    if(index==5){
//     console.log(`favourite number is:${index}`);
//     break;
    
//    }

// for (let index = 1; index <=20; index++) {
    
//     if(index==5){
//      console.log(`favourite number is:${index}`);
//      continue;// condition is skip for one time
     
//     }
//     console.log(`value of i is:${index}`);
    
// }


//=====while loop====
// let index=0;
// while (index<=10) {
//     console.log(`Value of index is ${index}`);
//    index= index+2;
// }

// do=while
let score=1
do{
   console.log(`Score${score}`);
   score++;
}while(score<=10){
    
}