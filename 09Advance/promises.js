const promiseOne =new Promise(function(resolve,reject){
    //Do an async task
    //Db calls ,cryptography ,network
    setTimeout(function(){
            console.log('Async task is complete');
            resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Keshav",email:"keshav@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Keshav",email:"keshav@gmail.com"})
        }
        else{
            reject('Error Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username 
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>console.log("Finally the promise is either resolved or rejected"))

const promiseFive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javascript",password:"1192299"})
        }
        else{
            reject('Error :JS went wrong')
        }
    },1000)
});

async function consumepromisefive(){
    try{
        const response=await promiseFive
    console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumepromisefive()

