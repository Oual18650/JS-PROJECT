// Task 1: Function Declaration
function sum(a,b){return a+b;}
console.log("Task1 Sum:", sum(5,7)); // 12

// Task 2: Function Expression
const square = function(n){return n*n;}
console.log("Task2 Square:", square(6)); // 36

// Task 3: Arrow Function
const isEven = n => n%2===0?"Even":"Odd";
console.log("Task3 Even/Odd:", isEven(5), isEven(8)); // Odd Even

// Task 4: Anonymous Function
const cToF = function(c){return (c*9/5)+32;}
console.log("Task4 Celsius to Fahrenheit:", cToF(25)); // 77

// Task 5: Function Hoisting
console.log("Task5 Hoisting:");
// Function declaration (hoisted)
console.log(decl(3,4)); // 7
function decl(a,b){return a+b;}

// Function expression (not hoisted)
const expr = function(a,b){return a*b;};
console.log(expr(3,4)); // 12

// Task 6: Default Parameters
function greet(name="User", msg="Hello"){return msg+", "+name+"!";}
console.log("Task6 Greeting:", greet(), greet("Dmitrii"), greet("Dmitrii","Hi"));

// Task 7: Rest Parameters
function average(...nums){
    let sum=0;
    for(let n of nums) sum+=n;
    return sum/nums.length;
}
console.log("Task7 Average:", average(5,10,15)); // 10

// Task 8: Callback Function
function processArray(arr, callback){
    return arr.map(callback);
}
console.log("Task8 Callback:", processArray([1,2,3,4], x=>x*2)); // [2,4,6,8]

// Task 9: Higher-Order Function
function multiplier(factor){
    return function(n){return n*factor;}
}
const times3 = multiplier(3);
console.log("Task9 Higher-Order:", times3(5)); // 15

// Task 10: IIFE
(function(){
    let msg="Task10: IIFE executed";
    console.log(msg);
})();
