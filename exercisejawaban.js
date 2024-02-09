//2. ganjila genap  
const num = 25 

if (num % 2 === 0){
    console.log((num), "Adalah Angka Genap")
} else {
    console.log((num), "Adalah Angka Ganjil")
}

//------------------------------------------
//4. Sum 1 ke N 1+2+3+4+5 = 15

const n=5
let result = 0

for (let i = 1; i<=n; i++){
    console.log(i)
    result += i
}
console.log(result)
//----------------------------------------
//5 Faktorial 

const m = 4
let resultt = 1

for (let j = m; j > 0; j--){
    console.log(j)
    resultt = resultt * j
}
console.log(resultt)
//---------------------------------------
//3. Bilangan Prima
const o = 17
let divider = 0 // variabel penampung

for (let k = 0; k <=o; k++){
    if (k % o ===0 ){
        divider++ 
    }
}
console.log(divider === 2 ? "Prima" : "Not Prima")