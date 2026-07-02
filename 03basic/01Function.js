function sayMyName(name) {
    console.log("k");
    console.log("e");
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("v");
}

// sayMyName();

// function addtwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// } 
function addtwoNumbers(num1, num2) {
//    let result = num1 + num2;
//  eturn result;
return num1 + num2;
} 
addtwoNumbers(10, 20);

function loginUserMessage(username) {
    if(!username) {
        console.log('Please enter a username');
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage());
