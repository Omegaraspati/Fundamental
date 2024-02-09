// for loop 
for (let i=1; i<=9; i++ ){       // i=0 , jika i kurang dari 5 , maka i ditambah 1 sampai menjadi 5 
        if ( i === 2 ) continue         // skip untuk bagian i=2 ( khusus untuk for loop)
    console.log(`Test Hallo ke - ${i}`)
}

for (let i = 10; i>0; i--) {
    console.log(`Test Hallo ke - ${i}`)
}
// while loop
let i = 0

while (i < 5 ){
    console.log(`Hello ke - ${i}`)
        if (i === 3) break       // break untuk jeda ( hanya untuk di while loop )
    i++
}
// do loop
let j = 0
do {
    console.log(`Hai ke - ${j}`)
    j++
} while (j < 5)

