// Task 1
var nameVar = "Dmitrii";
let ageLet = 25;
const isStudentConst = true;

console.log(nameVar, ageLet, isStudentConst);
if(true){
    var nameVar="Changed";
    let ageLet=30;
    const isStudentConst=false;
    console.log(nameVar, ageLet, isStudentConst);
}
console.log(nameVar, ageLet, isStudentConst);

// Task 2
const PI=3.14159;
let radius=5;
console.log("Area:", PI*radius**2, "Circumference:", 2*PI*radius);
radius=10;
console.log("New radius:", radius);

// Task 3
let strInt="42", strFloat="3.14";
console.log(parseInt(strInt), parseFloat(strFloat), Number(strInt), Number(strFloat), parseInt(strFloat));

// Task 4
var globalVar="global";
function f(){
    var localVar="var", letVar="let", constVar="const";
    if(true){
        var blockVar="block var", blockLet="block let", blockConst="block const";
        console.log(blockVar, blockLet, blockConst);
    }
    console.log(blockVar);
}
f();
console.log(globalVar);

// Task 5
let [a,b,c,d,e]=[10,20,30,40,50];
console.log(a,b,c,d,e);
[a,b,c,d,e]=[e,d,c,b,a];
console.log(a,b,c,d,e);
[a,b]=[b,a];
console.log(a,b);
