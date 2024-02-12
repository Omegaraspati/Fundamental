/*Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`*/

const word = "An apple a day keeps the doctor away"

console.log(word.toLowerCase().replaceAll("a", "*"))