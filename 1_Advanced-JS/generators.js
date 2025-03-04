/* A special function that can pause and resume execution using yield.
Implemented using the function* syntax. */

function* generatorFunction() {
    console.log("Start");
    yield "First pause";
    console.log("Resume");
    yield "Second pause";
    console.log("End");
}

const gen = generatorFunction();
console.log(gen.next()); // "Start", { value: "First pause", done: false }
console.log(gen.next()); // "Resume", { value: "Second pause", done: false }
console.log(gen.next()); // "End", { value: undefined, done: true }
// console.log(gen.next()); // "End", { value: undefined, done: true }


/* Using Generators for Infinite Iterators
Generators can create infinite sequences without using large memory.
 */

function* infiniteCounter() {
    let count = 1;
    while (true) {
        yield count++;
    }
}

const counter = infiniteCounter();

console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3


/* Using Generators with for...of
Generators are iterable.
 */
function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

for (let num of numbers()) {
    console.log(num);
}

