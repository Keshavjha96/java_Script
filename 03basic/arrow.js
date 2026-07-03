const user={
    username: "keshav",
    price:999,
     WelcomeMessage :function(){
        console.log(`Welcome ${this.username} and your price is ${this.price}`);
        //console.log(this);
     }
    }  

// user.WelcomeMessage()
// user.username="jha"
// user.WelcomeMessage()
// console.log(this);

// function chai(){
//     let username="keshav"
//     console.log(this);
// }
//  chai()

const chai=()=>{
    let username="keshav"
    console.log(this);
}
//chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(5,10))

// const addTwo = (num1,num2) => num1+num2
// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => {{username="keshav"}}
console.log(addTwo(5,10))