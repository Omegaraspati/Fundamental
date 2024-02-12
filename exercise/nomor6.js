/*Write a code to capitalize the first letter of each word in a string
○ Example : “hello world” → “Hello World”*/

const word = "hello purwadhika di bandung " // Hello Purwadhika Bandung
let result = ""

for (let i = 0; i < word.length; i++) {
    if ( i == 0 || word.charAt(i - 1) == " "){              // i-1 = memanggil kalimat dibelakang yang sama dengan spasi . jika spasi maka capslock 
        result = result + word.charAt(i).toLocaleUpperCase()  
    }   else  {
    result = result + word.charAt(i).toLocaleLowerCase()
    }
}

console.log(result)




















/*let kata = "hello world"
let Capital1 = kata.charAt(0).toUpperCase()
let Capital2 = kata.charAt(6).toUpperCase()
let CapitalString = Capital1 + kata.slice(1)
let CapitalString2= Capital2 + kata.slice(7)

console.log(CapitalString.replace("world", "") + CapitalString2)*/