/*Write a code to swap the case of each character from string 
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’*/

let kata = "The QuiCk BrOwN Fox" 
let result = ""

for  (let i = 0; i < kata.length; i++){
    if (kata.charAt(i) === kata.charAt(i).toUpperCase()){
    result = result + kata.charAt(i).toLocaleLowerCase()
} else {
    result = result + kata.charAt(i).toLocaleUpperCase()
}
}
console.log(kata)
console.log(result) 