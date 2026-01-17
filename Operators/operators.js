// Задание 1: Площадь прямоугольника
let width = 8, height = 5; 
// width = ширина, height = высота
console.log("Задание 1:", width * height); 
// площадь = width * height → 8*5 = 40

// Задание 2: Сравнение двух чисел (максимум)
function max(a, b){ 
    return a > b ? a : b; 
    // если a больше b → возвращаем a, иначе b
}
console.log("Задание 2:", max(15, 9)); // 15

// Задание 3: Проверка, находится ли число между 10 и 100
let num = 42; 
console.log("Задание 3:", num > 10 && num < 100); 
// true, потому что 42 > 10 И 42 < 100

// Задание 4: Остаток от деления
function remainder(a, b){ 
    return a % b; 
    // % возвращает остаток от деления a на b
}
console.log("Задание 4:", remainder(17, 5)); // 2

// Задание 5: Объединение строк
let s1 = "Java", s2 = "Script", s3 = "Fun";
console.log("Задание 5:", s1 + " " + s2 + " " + s3); 
// склеиваем строки с пробелами → "Java Script Fun"

// Задание 6: Инкремент (увеличение значения)
let counter = 7; 
function inc(){ 
    return ++counter; 
    // префиксный инкремент: увеличивает counter на 1 и возвращает новое значение
}
console.log("Задание 6:", inc(), inc()); 
// 8, затем 9

// Задание 7: Проверка НЕ равно
let val = 20;
console.log("Задание 7:", val != 10); 
// true, потому что 20 не равно 10

// Задание 8: Тернарный оператор
function checkAge(age){ 
    return age >= 18 ? "Adult" : "Minor"; 
    // если age >= 18 → "Adult", иначе "Minor"
}
console.log("Задание 8:", checkAge(17), checkAge(21)); 
// 17 → "Minor", 21 → "Adult"

// Задание 9: Обмен значений переменных
let x = 3, y = 8, temp = x; 
// сохраняем x во временную переменную
x = y; // x теперь = 8
y = temp; // y теперь = 3
console.log("Задание 9:", x, y); // 8, 3

// Задание 10: Nullish Coalescing (оператор ??)
let a = null, b = undefined, c = "Hello";
console.log("Задание 10:", a ?? "Default", b ?? "Default", c ?? "Default"); 
// ?? возвращает правую сторону, если левое значение null или undefined
// Результат: Default Default Hello
