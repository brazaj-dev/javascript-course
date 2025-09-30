'use strict';

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

function outerFunction() {
  console.log('Outer function start');
  innerFunction();
  console.log('Outer function end');
}

function innerFunction() {
  console.log('Inner function');
  console.trace();
}

outerFunction();

const globalVar = 'I am global';

function anyFunction() {
  console.log(globalVar);
}

function myFunction() {
  const functionVar = 'I am function-scoped';
  console.log(functionVar);
}

if (true) {
  let blockVar = 'I am block-scoped';
  const alsoBlockVar = 'Me too';
  var notBlockScoped = 'I leak out';
}

console.log(notBlockScoped);

const outer = 'global';

function demoScope() {
  const inner = 'function';
  if (true) {
    const blockConst = 'block';
    var functionVar = 'var-function-scoped';
    console.log(outer, inner, blockConst, functionVar);
  }
  console.log(outer, inner, functionVar);
}

demoScope();

const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name);
  }
  b();
}

a();

console.log(varX);

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX);
console.log(letX);
console.log(constX);

console.log(addDecl(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

const apiUrl = 'https://example.com';
console.log(apiUrl);

let title = 'Behind the Scenes';

function outerScope() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label);
  }
  inner();
}
outerScope();

function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one();

const person = {
  name: 'Joshua',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

person.greet();

const person1 = {
  name: 'Albert',
  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },
};

const anotherPerson = { name: 'Armando' };
anotherPerson.greet = person.greet;
anotherPerson.greet();

const greetFunction = person.greet;
greetFunction();

const button = document.querySelector('button');
button.addEventListener('click', person.greet);
button.addEventListener('click', () => person.greet());
button.addEventListener('click', person.greet.bind(person));

const obj = {
  name: 'Object',

  regularMethod: function () {
    console.log('Regular:', this.name);
  },

  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

const quiz = {
  name: 'Quiz Object',
  regularMethod() {
    console.log('Regular:', this.name);
  },
  arrowMethod: () => {
    console.log('Arrow:', this.name);
  },
};

quiz.regularMethod();
quiz.arrowMethod();

const timer = {
  name: 'Timer',

  start: function () {
    console.log(`${this.name} starting...`);
    const self = this;

    setTimeout(function () {
      console.log(`${self.name} finished`);
    }, 1000);
  },

  startModern: function () {
    console.log(`${this.name} starting modern...`);

    setTimeout(() => {
      console.log(`${this.name} finished modern`);
    }, 1500);
  },
};

timer.start();
timer.startModern();

const user = {
  name: 'Dodgie',
  hobbies: ['reading', 'coding', 'gaming', 'basketball', 'jogging'],

  printHobbiesBad: () => {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },

  printHobbiesGood() {
    this.hobbies.forEach(hobby => {
      console.log(`${this.name} likes ${hobby}`);
    });
  },
};

user.printHobbiesBad();
user.printHobbiesGood();

const functionTypes = {
  regularFunction: function () {
    console.log('Arguments length:', arguments.length);
    console.log('First argument:', arguments[0]);
  },

  arrowFunction: () => {
    console.log('Arrow function called');
  },

  modernFunction: (...args) => {
    console.log('Args length:', args.length);
    console.log('First arg:', args[0]);
  },
};

functionTypes.regularFunction('hello', 'world');
functionTypes.arrowFunction('test');
functionTypes.modernFunction('modern', 'approach');

const userCard = {
  name: 'Dexter Antonio',

  setupEvents() {
    console.log('Event setup for:', this.name);
  },
};

userCard.setupEvents();

const calculator = {
  numbers: [1, 2, 3, 4, 5],
  multiplier: 2,

  processNumbers() {
    return this.numbers.map(num => num * this.multiplier);
  },
};

console.log('Processed numbers:', calculator.processNumbers());

const myTimer = {
  name: 'Mar Timer',

  startCountdown() {
    console.log(`${this.name} starting countdown...`);

    setTimeout(() => {
      console.log(`${this.name} countdown finished!`);
    }, 1000);
  },
};

myTimer.startCountdown();

let age = 20;
let oldAge = age;
age = 21;

console.log('age:', age);
console.log('oldAge:', oldAge);

const me = { name: 'Spongebob', age: 30 };
const friend = me;

friend.age = 27;

console.log('me:', me);
console.log('friend:', friend);

function changeAge(person, newAge) {
  person.age = newAge;
  return person;
}

const originalPerson = { name: 'Squidward', age: 25 };
const updatedPerson = changeAge(originalPerson, 30);

console.log('original:', originalPerson);
console.log('updated:', updatedPerson);
console.log('same object?:', originalPerson === updatedPerson);

const original = {
  name: 'X.Borg',
  age: 28,
  hobbies: ['reading', 'coding'],
};

const shallowCopy = { ...original };

shallowCopy.name = 'Arlott';
console.log('original name:', original.name);
console.log('copy name:', shallowCopy.name);

shallowCopy.hobbies.push('gaming');
console.log('original hobbies:', original.hobbies);
console.log('copy hobbies:', shallowCopy.hobbies);

const anotherCopy = Object.assign({}, original);
console.log('Object.assign copy:', anotherCopy);

const deepOriginal = {
  name: 'Lapu-Lapu',
  age: 32,
  address: { city: 'Cebu', country: 'Philippines' },
  hobbies: ['forging', 'fishing'],
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = 'Mactan';
deepCopy.hobbies.push('cooking');

console.log('original address:', deepOriginal.address);
console.log('copy address:', deepCopy.address);
console.log('original hobbies:', deepOriginal.hobbies);
console.log('copy hobbies:', deepCopy.hobbies);

const problemObject = {
  name: 'Test',
  date: new Date(),
  method: function () {
    return 'hello';
  },
  undefinedValue: undefined,
};

const brokenCopy = JSON.parse(JSON.stringify(problemObject));
console.log('Broken copy:', brokenCopy);

const workingCopy = structuredClone(problemObject);
console.log('Working copy:', workingCopy);

const userManager = {
  users: [],

  addUser: function (userData) {
    const deepCopy =
      typeof structuredClone === 'function'
        ? structuredClone(userData)
        : JSON.parse(JSON.stringify(userData));

    this.users.push(deepCopy);
  },

  getUsers: function () {
    return this.users;
  },

  getUsersImmutable: function () {
    const clone =
      typeof structuredClone === 'function'
        ? obj => structuredClone(obj)
        : obj => JSON.parse(JSON.stringify(obj));
    return this.users.map(clone);
  },
};

const originalUser1 = { name: 'Mr. Crabs', preferences: { theme: 'dark' } };
userManager.addUser(originalUser1);

originalUser1.name = 'Modified';

console.log('Original changed:', originalUser1);
console.log('Stored user:', userManager.getUsers()[0]);

const arr = userManager.getUsers();
arr.push({ name: 'Plankton' });
console.log('Internal users length:', userManager.users.length);

const safeList = userManager.getUsersImmutable();
safeList[0].name = 'ChangedAgain';
console.log('Stored user after immutable-get:', userManager.getUsers()[0]);

function demonstrateThis() {
  console.log('this in strict mode:', this);
}
demonstrateThis();

const readOnlyObj = Object.freeze({ name: 'Frozen' });

try {
  readOnlyObj.name = 'Changed';
  console.log('Mutation succeeded');
} catch (error) {
  console.log('Strict mode caught error:', error.message);
}

const userManager1 = {
  users: [],

  addUser: function (userData) {
    const userCopy = structuredClone(userData);
    this.users.push(userCopy);
    return this;
  },

  getUsers: function () {
    return [...this.users];
  },
};

const originalUser2 = { name: 'Cici', preferences: { theme: 'dark' } };
userManager1.addUser(originalUser2);

originalUser2.name = 'Modified';
console.log('Original changed:', originalUser2);
console.log('Stored user:', userManager1.getUsers()[0]);
