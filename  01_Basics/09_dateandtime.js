let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());


console.log(typeof myDate);  // date typeof is Object


let myCreateDate= new Date(2023,0,23); // or further we add some valu on that year-month-day-hour-min-sec
console.log(myCreateDate.toDateString());

let myDate1=new Date(2023,1,25,12,14,56);//or further we add some valu on that year-month-day-hour-min-sec
console.log(myDate1.toString());


// let myDate2=new Date("2025-4-24")
// console.log(myDate2.toString());

let myDate2=new Date("01-14-2025")
console.log(myDate2.toString());


///// time Stamp


// let myTimeStamp=Date.now()
// console.log(myTimeStamp);


// console.log(myDate2.getTime());

console.log(Math.floor(Date.now()/1000))// for convert into second ask in intrview


let newDate=new Date();
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getTimezoneOffset());


let newdate3=newdate3.toLocaleString('default',{
    weekday:"long",
    timeZone:''
})





