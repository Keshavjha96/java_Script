//Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let createdDate = new Date(2023,0,5,10,30,0);
// let createdDate2 = new Date('2023-01-05T10:30:00');
// let createdDate3 = new Date('2023-01-05 10:30:00');
// let createdDate4 = new Date('2023-01-05');
console.log(createdDate.toLocaleString());

// let mytimestamp = Date.now();
// // console.log(mytimestamp);
// // console.log(createdDate.getTime());

// console.log(Math.floor(Date.now()/1000));

 let newDate=new Date();
 console.log(newDate.getFullYear());
 console.log(newDate.getMonth());
 console.log(newDate.getDate());
 console.log(newDate.getDay());

 newDate.toLocaleString('default', {weekday:'long', year:'numeric', month:'long', day:'numeric'});