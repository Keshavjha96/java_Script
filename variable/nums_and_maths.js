const score=400
console.log(score);

const balance= new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber= 123.456;
console.log(otherNumber.toPrecision(3));

const hundred=1000000000000;
console.log(hundred.toLocaleString('en-IN'));

console.log(Math);
console.log(Math.round(4.6));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);

const max=20;
const min=10;

console.log(Math.floor(Math.random()*(max-min+1))+min);
