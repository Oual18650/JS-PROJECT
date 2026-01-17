// Task 1: Проверка числа
let num = 5; // создаём переменную num и присваиваем ей значение 5
console.log("Task1:", num > 0 ? "Positive" : "Not positive"); 
// тернарный оператор: если num > 0 → "Positive", иначе → "Not positive"

// Task 2: Проверка возраста
function checkAdult(age) {
    return age >= 18 ? "Adult" : "Minor"; 
    // если возраст >= 18 → "Adult", иначе → "Minor"
}
console.log("Task2:", checkAdult(16), checkAdult(20)); 
// вызов функции с 16 → "Minor", с 20 → "Adult"

// Task 3: Оценка по букве
let grade = "B"; // оценка в виде буквы
if (grade === "A") console.log("Task3: Excellent"); 
// если оценка A → "Excellent"
else if (grade === "B") console.log("Task3: Good"); 
// если оценка B → "Good"
else if (grade === "C") console.log("Task3: Average"); 
// если оценка C → "Average"
else console.log("Task3: Needs Improvement"); 
// если ни A, B, C → "Needs Improvement"

// Task 4: Название дня по номеру
function dayName(n) {
    const days = ["Invalid","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    // массив дней недели, 0 индекс = "Invalid" чтобы индексация совпадала
    return days[n] || "Invalid"; 
    // возвращаем день по индексу n, если нет → "Invalid"
}
console.log("Task4:", dayName(3), dayName(7)); 
// выводим день 3 → "Wednesday", день 7 → "Sunday"

// Task 5: Чётное или нечётное
let n = 9; // число для проверки
console.log("Task5:", n % 2 === 0 ? "even" : "odd"); 
// остаток от деления n на 2 → если 0 → "even", иначе → "odd"

// Task 6: Можно ли водить машину
let age2 = 20, hasLicense = true; // возраст и наличие прав
console.log("Task6:", (age2 > 18 && hasLicense) ? "Can drive" : "Cannot drive"); 
// проверка: возраст больше 18 И есть права → "Can drive", иначе → "Cannot drive"

// Task 7: Доступ пользователя
function grantAccess(user) {
    // user = объект с полями admin и owner
    return (user.admin || user.owner) ? "Access granted" : "Access denied"; 
    // если админ ИЛИ владелец → доступ разрешен, иначе → доступ запрещен
}
console.log("Task7:", grantAccess({admin:false, owner:true}), grantAccess({admin:false, owner:false})); 
// первый объект имеет owner → "Access granted", второй нет → "Access denied"

// Task 8: Проверка пароля
function validPassword(pw) {
    const hasUpper = /[A-Z]/.test(pw); // есть заглавная буква?
    const hasNumber = /\d/.test(pw);   // есть цифра?
    const hasSpecial = /[!@#$%^&*]/.test(pw); // есть спецсимвол?
    return pw.length >= 8 && hasUpper && hasNumber && hasSpecial; 
    // пароль валиден только если длина ≥ 8 и все условия true
}
console.log("Task8:", validPassword("Pass123!"), validPassword("abc")); 
// первый пароль валиден → true, второй нет → false

// Task 9: Сезон по месяцу
function season(month) {
    if([12,1,2].includes(month)) return "Winter"; // зима
    if([3,4,5].includes(month)) return "Spring"; // весна
    if([6,7,8].includes(month)) return "Summer"; // лето
    if([9,10,11].includes(month)) return "Autumn"; // осень
    return "Invalid"; // если неправильный номер месяца
}
console.log("Task9:", season(1), season(7), season(10)); 
// 1 → Winter, 7 → Summer, 10 → Autumn

// Task 10: Скидка
function discount(amount, type) {
    let disc = 0; // начальная скидка 0%
    if(type === "vip") disc = 20;        // VIP → 20%
    else if(type === "premium") disc = 10; // Premium → 10%
    else if(type === "regular" && amount > 100) disc = 5; // Regular и сумма >100 → 5%
    return amount * (1 - disc/100); // новая сумма с учётом скидки
}
console.log("Task10:", discount(200,"vip"), discount(150,"premium"), discount(120,"regular"), discount(80,"regular"));
// выводим цену после скидки для разных типов
