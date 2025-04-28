// array part 1///

const myArr=[0,1,2,3,4,5]

const heros=["ironman","spiderman","nagraaj","doom"]
console.log(myArr);
 //array method

 myArr.push(6)// add value in  existing array 
 myArr.push(7)
 myArr.pop()// remove last value form array

 myArr.unshift(9)// add value in starting in array
 myArr.shift()//remove array from the starting


console.log(myArr.includes(9));//this method tel  value is available or not in array == provide result in boolean ==true/false/if value exit true ...if not false
console.log(myArr.indexOf(9))//same  as above but output is in if value not available -1 an

const newArr=myArr.join();// join convert array into string and give ouput==0,1,2,3,4,5
console.log(newArr);  // type is string
console.log( typeof newArr); // type string


 console.log(myArr);

// //// Slice and splice


console.log("A",myArr);
 const myn1=myArr.slice(1,3);//1. 3 index not included.. range not included.. not modifyed orginal array
                            //2. arr.splice(-2) for remove last elemnt in array we use negative index 
 console.log(myn1);
 console.log("B",myArr);

 const myn2=myArr.splice(1,3);//To add/remove/replace array elements in an array and modify the original array.
 console.log("C",myArr);
 console.log("C",myn2);


///// array part 2


const marvel_heroes=["thor","ironman","spiderman"];

const dc_heroes=["superman","batman","aquaman","flash","peacemaker"]
marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);  
// /// isme array ki andar array agya hai [
//  /* ['thor',
//   'ironman',
//   'spiderman',
//   [ 'spuerman', 'batman', 'aquaman', 'flash', 'peacemaker' ]
// ]*/

console.log(marvel_heroes[3][1]);// batman

const allheros=marvel_heroes.concat(dc_heroes)
console.log(allheros);// concat dhono array ko marge karta propely==>


    const all_new=[...marvel_heroes,...dc_heroes]
    console.log(all_new);//spread keyword same as concat


    const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

    const real_another_array=another_array.flat(Infinity)//The flat() method creates a new array with all nested sub-arrays flattened into it up to a specified depth,depth means array ke nadar kitne array hai =>we use infinty for all array.
    console.log(real_another_array);
    

    console.log((Array.isArray("Rahulverma"))); 
    console.log(Array.from("RahulVerma"));   //these method make array from string ,object,and other things
    console.log(Array.from({name:"hietsh"})); //intresitng for intrview


// we also convert multiple variable into array
    let score1=100
    let score2=200
    let score3=300

    console.log(Array.of(score1,score2,score3));// [ 100, 200, 300 ]


   // more read about array
    
    
    



 
 
 

