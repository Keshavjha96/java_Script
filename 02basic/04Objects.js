const tinderUser = {};

tinderUser.id = "123456";
tinderUser.name = "John Doe";
tinderUser.age = 30;
tinderUser.isActive = true;

console.log(tinderUser);

const regularUser = {
  email: "Keshav.jha1182@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Keshav",
      lastName: "Jha",
    },
  },
};
//console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

// const obj3=Object.assign({}, obj1, obj2);
// console.log(obj3);


const users=[
  {id:1, name:"Keshav", age:22},
  {id:2, name:"John", age:25},
  {id:3, name:"Jane", age:28},
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));