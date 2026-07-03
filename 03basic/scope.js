// var c=300
// if(true){
//     let a=100
//     var b=200
//     c=20
// }

function one(){
    const username="keshav"
      
    function two(){ 
        const website ="youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}

//one()


if(true){    const username="keshav"
    if(username==="keshav"){
        const website="youtube"
        console.log(username+website);

    }
    //console.log(website);
}
//console.log(username);


/////////////Interesting Example of Scope////////////////////
function addone(num){
    return num+1
}
addone(5)

const addtwo = function(num){
    return num+2
}
addtwo(5)
 