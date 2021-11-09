// fizzBuzzKata.js

// function fizzBuzz(num) {
//     if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
//     if (num % 5 === 0) return "Buzz";
//     if (num % 3 === 0) return "Fizz";
//     return num;
// }

function fizzBuzz(num) {
    let string = '';
    if (num % 3 === 0) string += "Fizz";
    if (num % 5 === 0) string += "Buzz";
    return string.length ? string : num;
}

module.exports = fizzBuzz;