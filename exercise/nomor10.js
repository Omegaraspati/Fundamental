/*Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42*/

let num1 = 42
let num2 = 27
let num3 = 18 

if(num1 > num2){                // 42 > 27
    let a = num1                // a = 42
    num1 = num2                 // num1 = 27
    num2 = a                    // num2 = 42
}
if(num2 > num3){                // 42 > 18
    let a = num2                // a = 42 
    num2 = num3                 // num2 = 18
    num3 = a                    // num3 = 42
}           
if(num1 > num2){                // 27 > 18
    let a = num1                // a = 27
    num1 = num2                 // num1 = 18
    num2 = a                    // num2 = 27
}
console.log(num1, num2, num3)