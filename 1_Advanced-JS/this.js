/* this with bind(), call(), and apply()
Method	Description
call()	Calls a function with a specified this value and arguments individually.
apply()	Similar to call(), but takes arguments as an array.
bind()	Returns a new function with this permanently set.
 */

const person = {
    name: "Vansh",
};

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

greet.call(person, "Hello"); // "Hello, Vansh"
greet.apply(person, ["Hi"]); // "Hi, Vansh"

const boundGreet = greet.bind(person);
boundGreet("Hey"); // "Hey, Vansh"