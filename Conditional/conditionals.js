// Task 1: Simple If
let num = 5;
console.log("Task1:", num>0?"Positive":"Not positive");

// Task 2: If-Else (Adult check)
function checkAdult(age){return age>=18?"Adult":"Minor";}
console.log("Task2:", checkAdult(16), checkAdult(20));

// Task 3: Nested If (grades)
let grade = "B";
if(grade==="A") console.log("Task3: Excellent");
else if(grade==="B") console.log("Task3: Good");
else if(grade==="C") console.log("Task3: Average");
else console.log("Task3: Needs Improvement");

// Task 4: Switch day name
function dayName(n){
    switch(n){
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid";
    }
}
console.log("Task4:", dayName(3), dayName(7));

// Task 5: Ternary operator
let n=9;
let parity = n%2===0?"even":"odd";
console.log("Task5:", parity);

// Task 6: Logical AND
let age2=20, hasLicense=true;
if(age2>18 && hasLicense) console.log("Task6: Can drive");
else console.log("Task6: Cannot drive");

// Task 7: Logical OR (access)
function grantAccess(user){
    return (user.admin || user.owner)?"Access granted":"Access denied";
}
console.log("Task7:", grantAccess({admin:false,owner:true}), grantAccess({admin:false,owner:false}));

// Task 8: Password validation
function validPassword(pw){
    let hasUpper = /[A-Z]/.test(pw);
    let hasNumber = /\d/.test(pw);
    let hasSpecial = /[!@#$%^&*]/.test(pw);
    return pw.length>=8 && hasUpper && hasNumber && hasSpecial;
}
console.log("Task8:", validPassword("Pass123!"), validPassword("abc"));

// Task 9: Switch with fall-through (seasons)
function season(month){
    switch(month){
        case 12: case 1: case 2: return "Winter";
        case 3: case 4: case 5: return "Spring";
        case 6: case 7: case 8: return "Summer";
        case 9: case 10: case 11: return "Autumn";
        default: return "Invalid";
    }
}
console.log("Task9:", season(1), season(7), season(10));

// Task 10: Discount calculator
function discount(amount,type){
    let disc=0;
    if(type==="vip") disc=20;
    else if(type==="premium") disc=10;
    else if(type==="regular" && amount>100) disc=5;
    return amount*(1-disc/100);
}
console.log("Task10:", discount(200,"vip"), discount(150,"premium"), discount(120,"regular"), discount(80,"regular"));
