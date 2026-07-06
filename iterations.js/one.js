// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
       // console.log("5 is the best number")
    }
   // console.log(element)
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

//console.log(map);

for(const[key,value] of map){
   console.log(key,':-',value);
}