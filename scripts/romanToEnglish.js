//DOM 
const convertBtn = document.getElementById('convert')
const english = document.getElementById('english')
const roman = document.getElementById('roman')

//btn
convertBtn.addEventListener('click', ()=>{
    let number = english.value
    if(Number(number > 0)){
        const result = converter(number)
        roman.innerText = `${result}`
        roman.style.color = 'cyan';
    } else if(Number(number) === 0 || String(number)){
        roman.innerText = `not a valid roman numerical`
        roman.style.color = 'red';}
})

//function to convert english to roman
function converter(number){
    const referance = [
        {value: 1000, symbol: "M"},
        {value: 900, symbol: "CM"},
        {value: 500, symbol: "D"},
        {value: 400, symbol: "CD"},
        {value: 100, symbol: "C"},
        {value: 90, symbol: "XC"},
        {value: 50, symbol: "L"},
        {value: 40, symbol: "XL"},
        {value: 10, symbol: "X"},
        {value: 9, symbol: "IX"},
        {value: 5, symbol: "V"},
        {value: 4, symbol: "IV"},
        {value: 1, symbol: "I"}
    ]
    let result = "";
    for ({value , symbol} of referance){
        while (number >= value){
            result += symbol
            number -= value
        }
    }
    return result;
}