// let myName="Keshav    "

// console.log(myName.truelength);



let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.Keshav=function(){
    console.log(`Keshav is present in all objects`);
}
//heroPower.Keshav()
myHeros.Keshav()