// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function calculator(arr) {
  let random = arr[Math.floor(Math.random() * arr.length)];

  return function squareNums() {
    let square = random * random;
    console.log(`The square of ${random} is ${square}`);
    return square;
  };
}

calculator(numbers)();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 2: Implement a "counter maker" function ====
// IMPLEMENTATION OF counterMaker:
// 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
// 2- Declare a function `counter`. It should increment and return `count`.
//      NOTE: This `counter` function, being nested inside `counterMaker`,
//      "closes over" the `count` variable. It can "see" it in the parent scope!
// 3- Return the `counter` function.
const counterMaker = limit => {
  let count = 0;
  return function counter() {
    if (count < limit) {
      return (count += 1);
    } else {
      count = 0;
      return counter(); // !!??
    }
  };
};

const myCounter = counterMaker(5);
console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
console.log(myCounter()); // 4
console.log(myCounter()); // 5
console.log(myCounter()); // 1??
console.log(myCounter());

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: function() {
      counter += 1;
      return counter;
    },
    decrement: function() {
      counter -= 1;
      return counter;
    }
  };
};
