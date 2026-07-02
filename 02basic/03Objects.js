//singleton
//object literal

const mySym=Symbol("key1")




const JsUser={
    name:"Keshav",
    [mySym]:"value1",
    age:20,
    location:"India",
    email:"keshav117694@google.com",
    isLoggedIn:true,
    lastLoginDays:["Monday","Tuesday","Wednesday"],
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser[mySym])

JsUser.email="Keshav.jha19294@gmail.com"
//Object.freeze(JsUser) //freeze the object so that we cannot change the properties of the object
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello JsUser");
}

JsUser.greeting2=function(){
    console.log(`Hello JsUser ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());