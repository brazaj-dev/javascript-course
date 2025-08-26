// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!
// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log("GUMANA KA BEH!!!");


// // console.log("=== VARIABLES ===");

// // let firstName = "Joshua";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);
// // age = 50;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "Programmer";
// // job = "Teacher";
// // console.log(job);

// // age = 51;

// // let lastName = "Doe";

// // console.log("=== DATA TYPES ===");

// // //number
// // age = 24;
// // console.log(age);
// // console.log(typeof age);

// // //string
// // let userName = "mark";
// // console.log(userName);
// // console.log(typeof userName);

// // //boolean
// // let JavaScriptIsFun = true;
// // console.log(JavaScriptIsFun);
// // console.log(typeof JavaScriptIsFun);

// // let year;
// // console.log(year);
// // console.log(typeof year);

// // //Dynamic Variable
// // let DynamicVariable = 23;
// // console.log(DynamicVariable, typeof DynamicVariable);

// // //Change into string
// // DynamicVariable = "Now i'm a string";
// // console.log(DynamicVariable, typeof DynamicVariable);

// // //Change into boolean
// // DynamicVariable = true;
// // console.log(DynamicVariable, typeof DynamicVariable);

// /////////////
// //Basic Operators - Math Operators
// console.log("=== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

// console.log("Math Operations");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// //math with strings
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");
// console.log("I am " + 25 + " years old!");

// //Assignment operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// //Assignment shortcuts
// x += 10;
// console.log("After x +=10:", x);
// x *= 4;
// console.log("After x *= 4:", x);
// x /= 2;
// console.log("After x /= 2:", x);
// x ++;
// console.log("x starts as:", x);
// x --;
// console.log("x starts as:", x);

// ///
// console.log ("=== COMPARISON OPERATORS ===");

// console.log("Age Comparison");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number Comparisons:");
// console.log(25>20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// //STORING COMPARISON RESULTS

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// console.log ("Complex comparison");
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);


// //Test Data 1:
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// let MarkBMI = massMark / (heightMark * heightMark);
// console.log("Mark's BMI is:", MarkBMI);
// let JohnBMI = massJohn / (heightJohn * heightJohn);
// console.log("John's BMI is:", JohnBMI);
// console.log("Mark has a higher BMI:",MarkBMI >= JohnBMI);

// //Test Data 2:
// const Markmass = 95;
// const Markheight = 1.88;
// const Johnmass = 85;
// const Johnheight = 1.76;

// let MarksBMI = Markmass / (Markheight * Markheight);
// console.log("Mark's BMI is:", MarksBMI);
// let JohnsBMI = Johnmass / (Johnheight * Johnheight);
// console.log("John's BMI is:", JohnsBMI);


// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
"I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works: ${2 + 3} equals five`);
console.log(`Comparisons too: ${5 > 3}`);

console.log("Just a regular String");

