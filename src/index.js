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
    return function multBy2(num) {
        return num * 2;
    };
}
var generatedFunction = createFunction();
console.log(generatedFunction(3));
console.log("\n==============\n\n");
function createFunction2() {
    return function multBy2(num, num2) {
        return num * num2;
    };
}
var generatedFunction2 = createFunction2();
console.log(generatedFunction2(3, 3));
