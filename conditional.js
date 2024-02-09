let age = 19;

if (age >= 17) {
    console.log ("You can creat an ID Card")
}

else { 
    console.log ("You can't Creat an ID Card")
}

let grade = "P"

if (grade === "A"){
    console.log("Excellent Result !!! ")
}
else if (grade === "B"){
    console.log("Great Result!")
}
else {
    console.log("Good Result")
}

//-------------------------------------------------------

let date = new Date("2077-02-09")
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


switch (day) {
    case 0:
        console.log("Hari Minggu")
        break
        case 1:
            console.log("Hari Senin")
            break
            case 2:
                console.log("Hari Selasa")
                break
                case 3:
                    console.log("Hari Rabu")
                    break
                    case 4:
                        console.log("Hari Kamis")
                        break
                        case 5:
                            console.log("Hari Jumat")
                            break
                            case 6:
                                console.log("Hari Sabtu")
                                break
        
}
    
//---------------------------------------

let car = "BMW"

if (car==="BMW"|| car === "Toyota"){        // || adalah atau , jika salah satu benar maka true 
    console.log("This Car is Awesome")      // && adalah dan , jika salah satu salah , maka false 
 }                                          // ! adalah negasi , kebalikan dari false and true }
 let str = "Java"
 if (!(str === "Java")){
    console.log("Java")
 } else {
    console.log("Not Java")
 }
 
 //-----------
 // Ternary Operator  
 console.log(str === "Java" ? "Java" : "Not Java") // cara tenary