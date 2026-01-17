// Task 1: Sum of numbers 1 to 10
let sum=0;
for(let i=1;i<=10;i++) sum+=i;
console.log("Task1 Sum:",sum); // 55

// Task 2: Multiplication table for 5
let n=1;
while(n<=10){
    console.log("Task2:",5,"x",n,"=",5*n);
    n++;
}

// Task 3: Reverse a string
let str="Hello";
let reversed="";
for(let i=str.length-1;i>=0;i--) reversed+=str[i];
console.log("Task3 Reversed:",reversed); // "olleH"

// Task 4: Count vowels
let sentence="This is an example";
let vowels="aeiouAEIOU", count=0;
for(let char of sentence) if(vowels.includes(char)) count++;
console.log("Task4 Vowels:",count); // 6

// Task 5: Factorial using do...while
let num=5, fact=1, k=1;
do{
    fact*=k;
    k++;
}while(k<=num);
console.log("Task5 Factorial:",fact); // 120

// Task 6: Find maximum in array
let arr=[3,7,2,9,4];
let max=arr[0];
for(let val of arr) if(val>max) max=val;
console.log("Task6 Max:",max); // 9

// Task 7: Filter even numbers
let evens=[];
for(let val of arr) if(val%2===0) evens.push(val);
console.log("Task7 Evens:",evens); // [2,4]

// Task 8: Nested loop pattern 5x5
console.log("Task8 Pattern:");
for(let i=0;i<5;i++){
    let row="";
    for(let j=0;j<5;j++) row+="* ";
    console.log(row);
}

// Task 9: Break and Continue
console.log("Task9 Break/Continue:");
for(let i=1;i<=10;i++){
    if(i===5) continue; // пропускаем 5
    if(i===8) break;    // останавливаем на 8
    console.log(i);
}

// Task 10: Array transformation (double elements)
let doubled=[];
for(let val of arr) doubled.push(val*2);
console.log("Task10 Doubled:",doubled); // [6,14,4,18,8]
