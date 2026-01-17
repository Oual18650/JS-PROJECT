// Задание 1: площадь прямоугольника
let width=8, height=5; // пример: 8 на 5
console.log("Задание 1:", width*height); // 40

// Задание 2: сравнение двух чисел
function max(a,b){return a>b?a:b;}
console.log("Задание 2:", max(15,9)); // 15

// Задание 3: проверка числа между 10 и 100
let num=42; // пример
console.log("Задание 3:", num>10 && num<100); // true

// Задание 4: остаток от деления
function remainder(a,b){return a%b;}
console.log("Задание 4:", remainder(17,5)); // 2

// Задание 5: объединение строк
let s1="Java", s2="Script", s3="Fun";
console.log("Задание 5:", s1+" "+s2+" "+s3); // "Java Script Fun"

// Задание 6: инкремент
let counter=7; // пример начального значения
function inc(){return ++counter;}
console.log("Задание 6:", inc(), inc()); // 8, 9

// Задание 7: проверка НЕ равно
let val=20;
console.log("Задание 7:", val!=10); // true

// Задание 8: тернарный оператор
function checkAge(age){return age>=18?"Adult":"Minor";}
console.log("Задание 8:", checkAge(17), checkAge(21)); // Minor, Adult

// Задание 9: обмен переменных
let x=3, y=8, temp=x;
x=y; y=temp;
console.log("Задание 9:", x,y); // 8, 3

// Задание 10: nullish coalescing
let a=null, b=undefined, c="Hello";
console.log("Задание 10:", a??"Default", b??"Default", c??"Default"); // Default Default Hello
