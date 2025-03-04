// a = 12;
console.log(a); // undefined (var is hoisted)
var a = 10;

console.log(b); // ❌ Error: Cannot access 'b' before initialization
let b = 20; 
