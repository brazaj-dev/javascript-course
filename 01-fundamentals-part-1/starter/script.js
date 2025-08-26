import prompt from 'prompt';
// // // // JavaScript Fundamentals - Part 1
// // // // We'll write our code here!
// // // let js = "amazing";
// // // console.log(40 + 8 + 23 - 10);
// // // console.log("GUMANA KA BEH!!!");


// // // console.log("=== VARIABLES ===");

// // // let firstName = "Joshua";
// // // console.log(firstName);

// // // let age = 30;
// // // console.log(age);
// // // age = 50;
// // // console.log(age);

// // // const birthYear = 1991;
// // // console.log(birthYear);

// // // const PI = 3.1415;
// // // console.log(PI);

// // // var job = "Programmer";
// // // job = "Teacher";
// // // console.log(job);

// // // age = 51;

// // // let lastName = "Doe";

// // // console.log("=== DATA TYPES ===");

// // // //number
// // // age = 24;
// // // console.log(age);
// // // console.log(typeof age);

// // // //string
// // // let userName = "mark";
// // // console.log(userName);
// // // console.log(typeof userName);

// // // //boolean
// // // let JavaScriptIsFun = true;
// // // console.log(JavaScriptIsFun);
// // // console.log(typeof JavaScriptIsFun);

// // // let year;
// // // console.log(year);
// // // console.log(typeof year);

// // // //Dynamic Variable
// // // let DynamicVariable = 23;
// // // console.log(DynamicVariable, typeof DynamicVariable);

// // // //Change into string
// // // DynamicVariable = "Now i'm a string";
// // // console.log(DynamicVariable, typeof DynamicVariable);

// // // //Change into boolean
// // // DynamicVariable = true;
// // // console.log(DynamicVariable, typeof DynamicVariable);

// // /////////////
// // //Basic Operators - Math Operators
// // console.log("=== MATH OPERATORS ===");

// // const now = 2037;
// // const ageJonas = now - 1991;
// // const ageSarah = now - 2018;
// // console.log(ageJonas, ageSarah);

// // console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);

// // console.log("Math Operations");
// // console.log("Addition:", 10 + 5);
// // console.log("Subtraction:", 20 - 8);
// // console.log("Multiplication:", 4 * 7);
// // console.log("Division:", 15 / 3);
// // console.log("Exponentiation:", 2 ** 3);

// // //math with strings
// // const firstName = "Jonas";
// // const lastName = "Doe";
// // console.log(firstName + " " + lastName);

// // console.log("Hello " + "World" + "!");
// // console.log("I am " + 25 + " years old!");

// // //Assignment operators
// // console.log("=== ASSIGNMENT OPERATORS ===");

// // let x = 10 + 5;
// // console.log("x starts as:", x);

// // //Assignment shortcuts
// // x += 10;
// // console.log("After x +=10:", x);
// // x *= 4;
// // console.log("After x *= 4:", x);
// // x /= 2;
// // console.log("After x /= 2:", x);
// // x ++;
// // console.log("x starts as:", x);
// // x --;
// // console.log("x starts as:", x);

// // ///
// // console.log ("=== COMPARISON OPERATORS ===");

// // console.log("Age Comparison");
// // console.log(ageJonas > ageSarah);
// // console.log(ageSarah >= 18);
// // console.log(ageJonas < 30);

// // console.log("Number Comparisons:");
// // console.log(25>20);
// // console.log(15 < 10);
// // console.log(18 >= 18);
// // console.log(16 <= 15);

// // //STORING COMPARISON RESULTS

// // const isFullAge = ageSarah >= 18;
// // console.log("Sarah is adult:", isFullAge);

// // console.log ("Complex comparison");
// // console.log(now - 1991 > now - 2018);

// // let z, y;
// // z = y = 25 - 10 - 5;
// // console.log(z, y);

// // const averageAge = (ageJonas + ageSarah) / 2;
// // console.log(ageJonas, ageSarah, averageAge);


// // //Test Data 1:
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // let MarkBMI = massMark / (heightMark * heightMark);
// // console.log("Mark's BMI is:", MarkBMI);
// // let JohnBMI = massJohn / (heightJohn * heightJohn);
// // console.log("John's BMI is:", JohnBMI);
// // console.log("Mark has a higher BMI:",MarkBMI >= JohnBMI);

// // //Test Data 2:
// // const Markmass = 95;
// // const Markheight = 1.88;
// // const Johnmass = 85;
// // const Johnheight = 1.76;

// // let MarksBMI = Markmass / (Markheight * Markheight);
// // console.log("Mark's BMI is:", MarksBMI);
// // let JohnsBMI = Johnmass / (Johnheight * Johnheight);
// // console.log("John's BMI is:", JohnsBMI);


// // Strings and Template Literals
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
// "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);

// console.log("Just a regular String");


//////////////////////////////////
// Type Conversion and Coercion

// type conversion (manual)
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // 1991, "1991"
console.log(Number(inputYear) + 18); // 2009

console.log(Number("Jonas")); 
console.log(typeof NaN);

console.log(String(23), 23); 
console.log(typeof String(23)); 

// type coercion (automatic)
console.log("I am " + 23 + " years old"); 
console.log("23" - "10" - 3); 
console.log("23" / "2"); 
console.log("23" * "2"); 

let n = "1" + 1; 
n = n - 1; 
console.log(n);

console.log(2 + 3 + 4 + "5"); 
console.log("10" - "4" - "3" - 2 + "5");

console.log("5" + 2); 
console.log("5" - 2); 
console.log("5" * 2); 
console.log("5" / 2);

const userAge = "25"; 
const userScore = 95;

const num1 = prompt("First number:"); 
const num2 = prompt("Second number:"); 
const sum = num1 + num2;
console.log(`Sum: ${sum}`);

const AgE = "18";
if (AgE === 18) console.log("You just became an adult :D (strict)");
if (AgE == 18) console.log("You just became an adult :D (loose)");

console.log("18" === 18); 
console.log("18" == 18); 
console.log(18 === 18);

console.log("0" == 0); 
console.log(0 == false);
console.log("0" == false);
console.log(null == undefined);

console.log("" == 0);
console.log("   " == 0);

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

// Not-equal operator
if (favourite !== 23) console.log("Why not 23?");

console.log(5 === "5"); 
console.log(5 == "5"); 
console.log(true === 1); 
console.log(true == 1); 
console.log(false === 0); 
console.log(false == 0); 

const username = prompt("Username:");
const password = prompt("Password:");

if (username == "admin" && password == "1234") {
  console.log("Welcome admin!");
} else {
  console.log("Access denied");
}

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const AGE = 20;
const hasPermission = true;
const hasExperience = false;

if ((age >= 18 || hasPermission) && hasExperience) {
  console.log("Approved to drive");
} else {
  console.log("Not approved to drive");
}

const Age = 19; 
const hasID = true;
const isVIP = false;

const temperature = 25;
const isRaining = false;
const isWindy = true;

const age = 23;

// Basic ternary: condition ? valueIfTrue : valueIfFalse
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// Equivalent if/else (more verbose)
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

const status = score >= 60 ? "passed" : "failed";
const message = isLoggedIn ? "Welcome back!" : "Please log in";
const discount = isPremium ? 0.2 : 0.1;

if (score >= 90) {
  console.log("Excellent!");
  grade = "A";
  bonus = true;
} else if (score >= 80) {
  console.log("Good job!");
  grade = "B";
}

const isLoggedIn = true;
let welcomeMessage;
if (isLoggedIn) {
  welcomeMessage = "Welcome back!";
} else {
  welcomeMessage = "Please sign in";
}

const isPremium = false;
let price;
if (isPremium) {
  price = 100 * 0.8;
} else {
  price = 100;
}

const score = 85;
const weather = "sunny";
const battery = 15;

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;