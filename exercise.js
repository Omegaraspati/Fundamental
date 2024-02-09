// 1. Merubah 60 celcius menjadi 140 Farenheit 
// °F = (9/5 x °C) + 32

// let celcius = 60
// let farenheit = (9/5*celcius+32)

// console.log(farenheit, "Fahrenheit")

// // 2. Memeriksa bilangan itu ganjil apa genap 


// for (let nomor = 1; nomor<=25; nomor++){
//     if(nomor%2 ===0){
//         console.log(nomor, "Adalah Bilangan Genap")
//     } else {
//         console.log(nomor, "Adalah Bilangan Ganjil")
//     }
// }
// // 3. menentukan bilangan prima 
// angkaPrima(2)
// function angkaPrima (num) {
//     let x= 0;
//     for(let i = 2; i<= Math.floor(num/2); i++) {
//       x++
//       if (num%i === 0) {
//         return false
//       } 
//     }
//     return true
// }

//   //4. mencari SUM 1 ke N 
// // function findSum(n) { 
// //     let sum = 0; 
// //     for (let i = 1; i <= n; i++) 
// //         sum = sum + i; 
// //     return sum; 
// // } 
// // const n = 5; 
// // console.log(findSum(n), "= 1 + 2 + 3 + 4 + 5")
// // function findSum(m) { 
// //     let sum = 0; 
// //     for (let j = 1; j <= m; j++) 
// //         sum = sum + j; 
// //     return sum; 
// }
// const m = 3
// console.log(findSum(m), "= 1 + 2 + 3")

// //5. Menemukan Faktorial dari angka 4 dan 6 
// faktorial(6)
// function faktorial(k){
// 	let angka=1
// 	let faktor=1
// 	 while(angka<=k){
// 		 faktor=faktor*angka;
// 		 angka=angka+1;
// 	 }
// 	 console.log(faktor,"= 6 x 5 x 4 x 3 x 2 x 1")
// }
// //6. 
// no 6 hibonanci 0 1 1 2 3 5 8 13 21 34 
let n = 10
let a = 0 
let b = 1
let NextNumber = 0 

for (let i = 1; i<= n; i++){
    NextNumber = a + b
    b = a
    a = NextNumber
}
console.log(a)