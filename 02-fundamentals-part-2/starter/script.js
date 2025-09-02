// console.log("Part 2 is now working!");
 
// //FUNCTIONS - DECLARATIONS AND EXPRESSIONS
// console.log("=== FUNCTIONS ===");
// function logger() {
//     console.log("My name is Joshua");
// }
// logger();
// logger();
// logger();
 
// //FUNCTIONS WITH PARAMETERS
// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
 
// console.log(fruitProcessor(5, 0));
 
// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 2);
// console.log(juice1);
 
// //FUNCTIONS EXPRESSIONS
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// };
 
// console.log(calcAge(2000));
// console.log(calcAge(2005));
 
// function introduce (firstName, lastName, age){
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old`;
//     return introduction;
// }
// console.log(introduce("Joshua", "Braza", "20"));
 
// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
 
//     if (retirement > 0){
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} had already retired`;
//     }
// }
 
// console.log(yearsUntilRetirement(2005, "Joshua"));
 
// //GLOBAL SCOPE
// const globalVar = "I AM GLOBAL";
 
// function testScope(){
//     const localVar = "I AM LOCAL";
//     console.log(globalVar);
//     console.log(localVar);
// }
 
// testScope();
// console.log(globalVar);
 
 
// function calcAverage(score1, score2, score3){
//     return (score1 + score2 + score3) / 3;
 
// }
 
// function checkWinner(avgDolphins, avgKoalas) {
// if(avgDolphins >= 2 * avgKoalas){
//     return`Dolphins win (${avgDolphins} vs ${avgKoalas})`;
// }else if(avgKoalas >= 2 * avgDolphins){
//     return`Koalas win (${avgKoalas} vs ${avgDolphins})`;
// }else {
//     return `No team wins! Koalas: ${avgKoalas}, Dolphins: ${avgDolphins}`;
// }
// }
 
// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));
 
// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));
 
 
// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;
 
// const grade = [85, 92, 78, 96, 88];
// console.log(grade);
 
// const friends = ["haohao", "markong", "fonsiong", "adriong"];
// console.log(friends);
 
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);
 
// const years = new Array (1991, 1984, 2008, 2020);
// console.log(years);
 
// console.log(friends[0]);
// console.log(friends[2]);
 
// console.log(friends.length);
 
// friends[1] = "Mark";
// console.log(friends);
 
// const firstName = "Joshua";
// const Joshua = [firstName, "Braza", 2025 - 2005];
// console.log(Joshua);
 
// const calcAge = function (birthYear){
//     return 2025 - birthYear;
// };
 
// const ages = [calcAge(2000), calcAge(2003), calcAge(1991)];
// console.log(ages);
 
// //ARRAY METHODS
 
// const newLength = friends.push("haohao");
// console.log(friends);
// console.log(newLength);
 
// const newLength2 = friends.push("Mark");
// console.log(friends);
 
// friends.unshift("fonsiong");
// console.log(friends);
 
// const popped = friends.pop();
// const popped2 = friends.pop();
// console.log(popped);
// console.log(popped2);
// console.log(friends);
 
// const shifted = friends. shift();
// console.log(shifted);
// console.log(friends);
 
// console.log(friends.indexOf("fonsiong"));
// console.log(friends.indexOf("Mark"));
 
// console.log(friends.includes("Mark"));
// console.log(friends.includes("adriong"));
 
// //ARRAY ITERATION - LOOPS
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }
 
// friends.forEach(
//     function (friend, index) {
//         console.log(`Friend ${index + 1} : ${friend}`)
//     }
// )
 
// const grades2 = [85, 92, 78, 80, 88, 74];
// let total = 0;
 
// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }
 
// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);
 
// let passedCount = 0;
// grades2.forEach((grade)=> {
// if (grade >= 70) passedCount++;
// });
 
// console.log(`${passedCount} out of ${grades2.length} students passed`);
 
 
const grades = [78, 85, 92, 67, 88, 95, 73, 82];
 
// Function to calculate average
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
        sum += grades[i];    
    }
    return sum / grades.length;
}
   
// Function to find highest grade
function findHighestGrade(grades) {
    let highest = grades[0];
    for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
        highest = grades[i]
    }  
    }
    return highest;
}
 
// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < lowest){
        lowest = grades[i]
    }
  }
  return lowest;
}
 
// Function to count passing students
function countPassing(grades, passingGrade) {
  let passedCount = 0;
    for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passedCount) {
       passedCount++;
    }
    }
    return passedCount;
}
 
// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);
 
console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);