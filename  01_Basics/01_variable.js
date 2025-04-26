const accountId=1445556 // change nahi kar sakte accound ki valu
let accountEmail="vivek@"
var accountPassword="123456" // use of var are limited
accountCity="jaipur"

let accountState;// output will be undefined

/* we can declare variable without use of any let,const and var
but this is not good coding practice
*/
//accountId=2
accountEmail="rahu@"
accountPassword="987175"
accountCity="Delhi"
//console.log(accountId);

/*  
prefer not to use var
becase of issue in block scope and functional scope*/ 
console.table([accountId, accountEmail, accountPassword,accountCity, accountState])

