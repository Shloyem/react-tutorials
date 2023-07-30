// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const numbers = [1, 4, 9];

// Arrow function
const resultArrow = numbers.map((num, index, array) => num * index * array.length * this.factor, { factor: 2 });
console.log(resultArrow); // [NaN, NaN, NaN]

//Arrow functions do not bind their own this context, so thisArg is ignored in this case.
// Instead, this inside the arrow function refers to the enclosing scope, not the thisArg object you passed to map()

// Regular function
const result = numbers.map(function (num, index, array) {
  return num * index * array.length * this.factor;
}, { factor: 2 });
console.log(result); // [* index0 = 0, 4 * 1 * 3 * 2 = 24,  9 * 2 * 3 * 2 = 108]


// Iterative methods
// Many array methods take a callback function as an argument.The callback function is called sequentially
// and at most once for each element in the array, and the return value of the callback function is used
// to determine the return value of the method.They all share the same signature:
// method(callbackFn, thisArg)

// he thisArg argument(defaults to undefined) will be used as the this value when calling callbackFn.
// The this value ultimately observable by callbackFn is determined according to the usual rules:
// if callbackFn is non - strict, primitive this values are wrapped into objects, and undefined / null is substituted with globalThis.
// The thisArg argument is irrelevant for any callbackFn defined with an arrow function, as arrow functions don't have their own this binding.

