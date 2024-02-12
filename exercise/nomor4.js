/*Write a code to format number as currency (IDR)
○ Example : 1000 → “Rp. 1.000,00”*/

const number = 1000                     // number 1000
const numString = number.toString()     //string"1000"
let result = ""                         // variable penampung
let count = 0                           // variable looping keberapa

for (let i = numString.length - 1; i>=0; i--){
    if (count % 3 === 0 && count > 0 ) {
    result = "." + result     // jika numstring.charart didepam , maka looping akan terbaik posisinya 
    }

    result = numString.charAt(i) + result
    count++ 
}

console.log(`Rp. ${result},00`)













/*const uang = 20000
let uangindo = Intl.NumberFormat("id-ID")

let rp = Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(uang)
console.log(rp)*/