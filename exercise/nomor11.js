/*Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data 
type.
○ Example : “hello” → 1*/

const input = "purwadhika"
const type = typeof input 

console.log(type)
console.log(type == "string" ? 1 : type == "number" ? 2 : 3)