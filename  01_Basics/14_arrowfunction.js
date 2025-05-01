const user={
    username:"rahul",
    price:987,

    welcomeMessage:function(){
        console.log(`${this.username},welcome sir ji`);//this keyword current content me video print karta hai
        
    }
}
user.welcomeMessage()
user.username="vivek"
user.welcomeMessage()