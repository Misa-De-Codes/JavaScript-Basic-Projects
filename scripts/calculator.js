//DOM
const resultBar = document.getElementById('result')
const allClearBtn = document.getElementById("allClearBtn")
const equalsBtn = document.getElementById('equalsBtn')
const clearBtn = document.getElementById('clearBtn')

//digit values
function digits(digit){
    key = digit
    resultBar.value +=`${key}`
}

//allclear btn
allClearBtn.addEventListener('click', ()=>{
    resultBar.value = "";
})

//equals function
equalsBtn.addEventListener('click', ()=>{
    let problem = resultBar.value
    try{
        calculation(problem)}
    catch(Error){
        alert("enter valid calculation")
    }
})

//Calculaiton function
function calculation(x){
    return resultBar.value  = (eval(x))
}
