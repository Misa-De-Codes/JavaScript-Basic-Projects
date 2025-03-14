//DOM
const generate = document.getElementById('generate')
const copyBtn = document.getElementById('copy')

//variables
const allCharacters = ['0', '6', '7', '8', '9', '!', '@',  'O', 'P', 'Q', 'R', '#', '$', '%', '^', '&', '*', '(', ')', '.', 'a', 'b', 'c','G', 'H', 'I', 'J', 'K', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', '1', '2', '3', '4', '5', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',  'L', 'M', 'N', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'] // Uppercase alphabets 
let password = Array(8)
let lengthInput;

//calls
copyBtn.addEventListener('click', copy)
generate.addEventListener('click', ()=>{setPassword(lengthInput)})

//functions
function setPassword(length = 8){
    password
    for (i = 0; i < length; i++){
            let index = Math.floor(Math.random() * allCharacters.length)
            password[i] = allCharacters[index]   
        }
        document.getElementById('passwordText').innerText = password.join('')
    password = []
}

function copy(){
    let copiedText = document.getElementById('passwordText').innerText
    if(copiedText !== "Generate a password"){
        navigator.clipboard.writeText(copiedText)
        return
    }
}

function no(no){
    return lengthInput = no
}
