//DOM
const click = document.getElementById('click')
const newGame = document.getElementById('newGame')
const tails = document.getElementById('tails')
const heads = document.getElementById('heads')

//scores
let tailsScore = 0;
let headsScore = 0;

//btns
click.addEventListener('click', ()=>{
    const board = document.getElementById('board')
    const number = Math.floor(Math.random() * 10 + 1)
    console.log(number)
    if(number % 2 == 0){
        tailsScore++
        board.innerText = "tails";
        tails.innerText = `tails: ${tailsScore}`
    } else{
        headsScore++
        board.innerText = "Heads";
        heads.innerText = `heads: ${headsScore}`
    }
    board.style.fontSize = '32px';
    board.style.fontWeight= '700';
})
newGame.addEventListener('click', ()=>{
    tailsScore = 0;
    headsScore = 0;
    heads.innerText = `heads: ${headsScore}`
    tails.innerText = `heads: ${tailsScore}`
})