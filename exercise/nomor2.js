/*Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome*/

const word = "MADAM"
let reverseWord = ""

    for (let i = word.length -1; i>=0; i-- ){ // lenght = nentukan panjang huruf (madam = 5) (-1 = biar jadi 4 karena posisi huruf belakang = 4
        //console.log(word.charAt(i))           // charArt = karakter ke ( berapa (i)) i=4; i=3; i=2; i=1; i=0
        reverseWord += word.charAt(i)          // reverseWord = reverseWord + word.chatAt(i)
    }   
    //console.log (reverseWord)

    if (word === reverseWord){
    console.log(`${word} is Palindrome`)
    } else {
        console.log(`${word} is not Polindrome`)
    }

    