//DOM
const board = document.getElementById('board')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissor = document.getElementById('scissor')
const resetScoresBtn = document.getElementById('resetScores')

//scores
let player = 0;
let computer = 0;
const choices = ['rock', 'paper', 'scissor']

//btns
board.addEventListener('click', (e)=>{
    if(e.target.closest("#rock")){
        rock.addEventListener('click', reveal(0))
    } else if(e.target.closest("#paper")){
        paper.addEventListener('click', reveal(1))
    } else if(e.target.closest("#scissor")){
        scissor.addEventListener('click', reveal(2))
    }
})
resetScoresBtn.addEventListener('click', ()=>{
        player = 0;
        computer = 0;
        document.getElementById('player').innerText = `you: ${player}`
        document.getElementById('computer').innerText = `computer: ${computer}`   
})

//functions
function reveal(playerNo){
    const number = Math.floor(Math.random() * choices.length)
    const computerChoice = choices[Math.max(number, 0)]
    const playerChoice = choices[playerNo]

    if(playerChoice === computerChoice){ 
        document.getElementById('results').innerText = `It's a tie!`;
    } else if(playerChoice !== computerChoice){
        document.getElementById('results').innerText = `You: ${playerChoice}  |  Computer: ${computerChoice}`;
        if(playerChoice ==='rock' & computerChoice ==='scissor' |
            playerChoice ==='paper' & computerChoice ==='rock'|
            playerChoice ==='scissor' & computerChoice ==='paper'
        ){ player++
            document.getElementById('player').innerText = `you: ${player}`
            
        }else{computer++;
            document.getElementById('computer').innerText = `computer: ${computer}`
        }
    }
}
