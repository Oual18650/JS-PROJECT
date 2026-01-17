// Task 1: Проверка числа
let num = 5;
console.log("Task1:", num > 0 ? "Positive" : "Not positive");

// Task 2: Проверка возраста
function checkAdult(age) {
    return age >= 18 ? "Adult" : "Minor";
}
console.log("Task2:", checkAdult(16), checkAdult(20));

// Task 3: Оценка по букве
let grade = "B";
if (grade === "A") console.log("Task3: Excellent");
else if (grade === "B") console.log("Task3: Good");
else if (grade === "C") console.log("Task3: Average");
else console.log("Task3: Needs Improvement");

// Task 4: Название дня
function dayName(n) {
    const days = ["Invalid","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    return days[n] || "Invalid";
}
console.log("Task4:", dayName(3), dayName(7));

// Task 5: Чётное или нечётное
let n = 9;
console.log("Task5:", n % 2 === 0 ? "even" : "odd");

// Task 6: Можно ли водить
let age2 = 20, hasLicense = true;
console.log("Task6:", (age2 > 18 && hasLicense) ? "Can drive" : "Cannot drive");

// Task 7: Доступ пользователя
function grantAccess(user) {
    return (user.admin || user.owner) ? "Access granted" : "Access denied";
}
console.log("Task7:", grantAccess({admin:false, owner:true}), grantAccess({admin:false, owner:false}));

// Task 8: Проверка пароля
function validPassword(pw) {
    const hasUpper = /[A-Z]/.test(pw);
    const hasNumber = /\d/.test(pw);
    const hasSpecial = /[!@#$%^&*]/.test(pw);
    return pw.length >= 8 && hasUpper && hasNumber && hasSpecial;
}
console.log("Task8:", validPassword("Pass123!"), validPassword("abc"));

// Task 9: Сезон по месяцу
function season(month) {
    if([12,1,2].includes(month)) return "Winter";
    if([3,4,5].includes(month)) return "Spring";
    if([6,7,8].includes(month)) return "Summer";
    if([9,10,11].includes(month)) return "Autumn";
    return "Invalid";
}
console.log("Task9:", season(1), season(7), season(10));

// Task 10: Скидка
function discount(amount, type) {
    let disc = 0;
    if(type === "vip") disc = 20;
    else if(type === "premium") disc = 10;
    else if(type === "regular" && amount > 100) disc = 5;
    return amount * (1 - disc/100);
}
console.log("Task10:", discount(200,"vip"), discount(150,"premium"), discount(120,"regular"), discount(80,"regular"));
