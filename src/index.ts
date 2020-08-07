//A closure is a function having access to the parent scope, even after the parent function has closed.

//In JavaScript, closures are created every time a function is created, at function creation time.

function add() {
  var counter = 0;
  return function increaseCounter() {
    counter += 1;
    console.log("increaseCounter -> counter", counter);
    return counter;
  };
}
add();
add();
add();

console.log("increaseCounter -> counter");

console.log("\n==============\n\n");

function createFunction() {
  return function multBy2(num: number) {
    return num * 2;
  };
}

// result of RUNNING createFunction ONCE
let generatedFunction = createFunction();

//JS is a synchrous language, it reads the line and moves on -
// therefore, geneartedFunc is the code inside createFunction - THAT IS IT
console.log(generatedFunction(3));

console.log("\n==============\n\n");

function createFunction2() {
  return function multBy2(num: number, num2: number) {
    return num * num2;
  };
}

let generatedFunction2 = createFunction2();
console.log(generatedFunction2(3, 3));
