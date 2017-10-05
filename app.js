var math_lib = require('./mathlib')();
var a = math_lib.add(4,7);
var b = math_lib.multiply(4,7);
var c = math_lib.square(7);
var d = math_lib.random(4,7);

console.log(a);
console.log(b);
console.log(c);
console.log(d);