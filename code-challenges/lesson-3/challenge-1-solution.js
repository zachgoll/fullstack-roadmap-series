// 1
const myBoolean = true;

// 2
const myString = 'hello world';

// 3
const firstNumber = 20;

// 4 - notice how I have used `let` here.  We have to use this because we re-assign the value of this variable
let secondNumber = 40;

// 5
secondNumber = 80;

// 6
const myArray = [myBoolean, myString];

// 7
const myObject = {
  firstProperty: myArray,
  sumProperty: firstNumber + secondNumber
};

// 8
console.log(myObject);

// 9
const sumProp = myObject.sumProperty;
console.log(sumProp);

// 9 - Alternate solution
console.log(myObject.sumProperty);

// 10
const firstProp = myObject.firstProperty;
const arrayValue = firstProp[1];
console.log(arrayValue);

// 10 - Alternate solution
console.log(myObject.firstProperty[1]);
