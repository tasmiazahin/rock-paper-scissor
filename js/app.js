const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const playerCount = document.querySelector(".playerCount");
const computerCount = document.querySelector(".computerCount");
const finalResult = document.querySelector(".finalResult");


let player;
let computer;
let result;
let playerScore = 0;
let computerScore= 0;

choiceBtns.forEach(button => button.addEventListener("click",() =>{
   player= button.textContent;
   computerTurn();
   //playerText.textContent = `Player: ${player}`;
   playerText.textContent = "Player: " + player;
   computerText.textContent = `Computer: ${computer}`;
   resultText.textContent = `Result: ${checkWinner()}`;;
   playerCount.textContent = playerScore;
   computerCount.textContent = computerScore;

   if(playerScore ==  5 || computerScore == 5){
    if(playerScore==5){
        finalResult.textContent =  "You have won the game" 
    }else{
        finalResult.textContent =  "You have lost to computer"
    }
    gameOver();
   }
}))

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;
    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        
        case 2:
            computer = "PAPER";
            break;

        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if (player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        if(player == "PAPER"){
            playerScore++;
            return "You win"

        }else{
            computerScore++;
            return "You loose"
        }
        //return (player == "PAPEER")? "You Win!"  : "You Lose!"
    }
    else if(computer == "PAPER"){
        if(player == "SCISSORS"){
            playerScore++;
            return "You win"

        }else{
            computerScore++;
            return "You loose"
        }
        //return (player == "SCISSORS")? "You Win!"  : "You Lose!"
    }
    else if(computer == "SCISSORS"){
        if(player == "ROCK"){
            playerScore++;
            return "You win"

        }else{
            computerScore++;
            return "You loose"
        }
        //return (player == "ROCK")? "You Win!"  : "You Lose!"
    }
}

function gameOver(){
    choiceBtns.forEach(btn=>{
        btn.style.display =  "none"
    })
};
