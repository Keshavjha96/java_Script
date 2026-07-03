//imeditely invoked function expression
(function() {
    //named iffe
    console.log(`DB connected`);
})();

((name)=>{
    console.log(`DB connected with ${name}`);
})(`Keshav`)