// Task 1: Function Declaration (обычное объявление функции)
function sum(a, b) {
    return a + b; // возвращает сумму a и b
}
console.log("Task1 Sum:", sum(5, 7)); 
// вызов функции sum с аргументами 5 и 7 → 12

// Task 2: Function Expression (функция присваивается переменной)
const square = function(n) {
    return n * n; // возвращает n в квадрате
};
console.log("Task2 Square:", square(6)); 
// вызов функции через переменную square с аргументом 6 → 36

// Task 3: Arrow Function (короткая форма функции)
const isEven = n => n % 2 === 0 ? "Even" : "Odd"; 
// если n делится на 2 без остатка → "Even", иначе → "Odd"
console.log("Task3 Even/Odd:", isEven(5), isEven(8)); 
// 5 → Odd, 8 → Even

// Task 4: Anonymous Function (анонимная функция, присвоенная переменной)
const cToF = function(c) {
    return (c * 9 / 5) + 32; // перевод Цельсия в Фаренгейты
};
console.log("Task4 Celsius to Fahrenheit:", cToF(25)); 
// 25°C → 77°F

// Task 5: Function Hoisting (поднятие функций)
console.log("Task5 Hoisting:");

// Function declaration (hoisted) – поднимается в начало области видимости
console.log(decl(3, 4)); // 7, работает даже до объявления
function decl(a, b) { return a + b; }

// Function expression (не hoisted) – нельзя вызвать до объявления
const expr = function(a, b) { return a * b; };
console.log(expr(3, 4)); // 12, только после объявления

// Task 6: Default Parameters (параметры по умолчанию)
function greet(name="User", msg="Hello") {
    return msg + ", " + name + "!"; 
    // если не передан аргумент, используется значение по умолчанию
}
console.log("Task6 Greeting:", greet(), greet("Dmitrii"), greet("Dmitrii", "Hi")); 
// без аргументов → "Hello, User!"
// с именем → "Hello, Dmitrii!"
// с именем и сообщением → "Hi, Dmitrii!"

// Task 7: Rest Parameters (неограниченное количество аргументов)
function average(...nums) { 
    // ...nums собирает все аргументы в массив
    let sum = 0;
    for(let n of nums) sum += n; // суммируем все числа
    return sum / nums.length; // возвращаем среднее
}
console.log("Task7 Average:", average(5, 10, 15)); 
// (5+10+15)/3 → 10

// Task 8: Callback Function (функция обратного вызова)
function processArray(arr, callback) { 
    return arr.map(callback); 
    // применяем callback к каждому элементу массива через map
}
console.log("Task8 Callback:", processArray([1,2,3,4], x => x * 2)); 
// каждый элемент умножается на 2 → [2,4,6,8]

// Task 9: Higher-Order Function (функция, возвращающая функцию)
function multiplier(factor) {
    return function(n) { return n * factor; }; 
    // возвращает новую функцию, которая умножает на factor
}
const times3 = multiplier(3); // times3 → функция, умножающая на 3
console.log("Task9 Higher-Order:", times3(5)); 
// 5*3 → 15

// Task 10: IIFE (Immediately Invoked Function Expression — самовызывающаяся функция)
(function(){
    let msg = "Task10: IIFE executed";
    console.log(msg); 
    // функция выполняется сразу после объявления
})();
