const Marvel_heroes=["Iron Man","Captain America","Thor"];
const DC_heroes=["Batman","Superman"," Flash","Wonder"];

// const all_heroes=Marvel_heroes.concat(DC_heroes);
// console.log(all_heroes);

// const all_heroes=[...Marvel_heroes,...DC_heroes];
// console.log(all_heroes);

const another_arr=[1,2,3,4,[5,6,[7,8,9]]];
const real_arr=another_arr.flat(2);
console.log(real_arr);

console.log(Array.isArray("keshav"));
console.log(Array.from("keshav"));
console.log(Array.from({name:"keshav"}));//intresting case

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));