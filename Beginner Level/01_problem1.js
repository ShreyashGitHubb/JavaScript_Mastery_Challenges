// Write a function to reverse a string.

let str = "hello";

function reverseString(str) {
    return str.split('').reverse().join('');
}
  
console.log(reverseString(str));