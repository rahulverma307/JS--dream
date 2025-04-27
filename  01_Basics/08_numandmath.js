const score=400
// console.log(score);

const balance=new Number(400)
// console.log(balance);

//number method//
//1.balance
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));//=>400.00 2 fixed generally used in industry
//2.precision
const othernumber=23.454545;
// console.log(othernumber.toPrecision(3));
//3.tolocalstring ,

const hundreds=100000
// console.log(hundreds.toLocaleString('en-IN'));//1,00,000

////////maths////////
console.log(Math);

// console.log(Math.abs(-4));// negtive to positive
// console.log(Math.round(4.3));//round value=>4
// console.log(Math.ceil(4.6)); // agr for se jada hua to next valu dedega=>5
// console.log(Math.floor(4.9));//niche vali hi valu us karga=>4
// console.log((Math.min(25,45,98,78,32,11)));//retun min valu=>11
// console.log((Math.max(45,78,65,12,4,57,878,7,8)));//retun max value==>878


console.log((Math.random()*10) + 1);
const min=10
const max=20
console.log( Math.floor(Math.random()*(max - min + 1))+min);











