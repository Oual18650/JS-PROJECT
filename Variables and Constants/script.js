var nameVar = "Dmitrii";   // var: глобальная или функциональная область видимости
let ageLet = 25;           // let: блочная область видимости
const isStudentConst = true; // const: блочная область видимости, нельзя переопределять

console.log(nameVar, ageLet, isStudentConst);
// выводим начальные значения: "Dmitrii 25 true"

if(true){ // блок кода, который выполняется
    var nameVar = "Changed";  // var "всплывает" в функцию/глобально → перезаписывает nameVar
    let ageLet = 30;          // новая переменная ageLet внутри блока, глобальный ageLet не меняется
    const isStudentConst = false; // новая const внутри блока, глобальная не меняется
    console.log(nameVar, ageLet, isStudentConst); 
    // вывод внутри блока: "Changed 30 false"
}

console.log(nameVar, ageLet, isStudentConst);
// вывод после блока: "Changed 25 true"
// nameVar изменилось глобально (var), ageLet и isStudentConst остались прежними (блочные)


// Task 2: Константы, переменные и математика

const PI = 3.14159;  // константа π
let radius = 5;       // переменная радиус

console.log("Area:", PI*radius**2, "Circumference:", 2*PI*radius);
// площадь = π * r², окружность = 2*π*r
// вывод: Area: 78.53975 Circumference: 31.4159

radius = 10;          // меняем радиус
console.log("New radius:", radius); // вывод: 10


// Task 3: Преобразование типов

let strInt = "42", strFloat = "3.14"; // строки, содержащие числа

console.log(
    parseInt(strInt),    // "42" → 42 (целое число)
    parseFloat(strFloat),// "3.14" → 3.14 (число с плавающей точкой)
    Number(strInt),      // "42" → 42
    Number(strFloat),    // "3.14" → 3.14
    parseInt(strFloat)   // "3.14" → 3 (берёт только целую часть)
);
// вывод: 42 3.14 42 3.14 3


// Task 4: Функции и области видимости

var globalVar = "global"; // глобальная переменная

function f() {
    var localVar = "var";       // локальная переменная функции
    let letVar = "let";         // блочная переменная
    const constVar = "const";   // блочная константа

    if(true){
        var blockVar = "block var";   // var внутри блока "всплывает" в функцию
        let blockLet = "block let";   // let локальная для блока
        const blockConst = "block const"; // const локальна для блока
        console.log(blockVar, blockLet, blockConst);
        // вывод: "block var block let block const"
    }

    console.log(blockVar);
    // blockVar доступна здесь, так как var "всплыла"
    // blockLet и blockConst здесь уже недоступны
}

f();
console.log(globalVar); 
// выводим глобальную переменную: "global"


// Task 5: Деструктуризация массива

let [a,b,c,d,e] = [10,20,30,40,50]; 
console.log(a,b,c,d,e); // 10 20 30 40 50

[a,b,c,d,e] = [e,d,c,b,a]; // меняем порядок элементов
console.log(a,b,c,d,e); // 50 40 30 20 10

[a,b] = [b,a]; // меняем местами только a и b
console.log(a,b); // 40 50


