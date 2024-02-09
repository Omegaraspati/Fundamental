let date = new Date("2077-02-07")
let day = date.getDay()


if (day === 0){
    console.log("Hari Minggu")
} 
else if (day == 1){
    console.log("Hari Senin")
} 
else if (day == 2){
    console.log("Hari Selasa")
} 
else if (day == 3){
    console.log("Hari Rabu")
} 
else if (day == 4){
    console.log("Hari Kamis")
} 
else if (day == 5){
    console.log("Hari Jumat")
} 
else if (day == 6){
    console.log("Hari Sabtu")
}
else {
    console.log("Tidak Tersedia")
}