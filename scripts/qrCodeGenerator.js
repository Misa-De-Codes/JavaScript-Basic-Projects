//DOM
const convertBtn = document.getElementById('convert')
const textInput = document.getElementById('text')
const qrcode = document.getElementById('qrcode')

convertBtn.addEventListener('click', convert)


function convert(){
    let text = textInput.value.trim()

    if(text === ''){
           console.log('empty') 
    }

}
