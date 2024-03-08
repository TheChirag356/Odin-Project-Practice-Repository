function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerChoice = prompt('Rock, Paper, or Scissors?').toLowerCase();
    return playerChoice;
}

function play(playerChoice, computerChoice) {
    let result = false;
    switch (playerChoice) {
        case 'rock':
            switch (computerChoice) {
                case 'rock':
                    console.log('Tie');
                    break;

                case 'paper':
                    console.log('You lose');
                    break;

                case 'scissors':
                    console.log('You win');
                    result = true;
                    break;
            
                default:
                    console.log('Some error happened');
                    break;
            }
            
            break;
        
        case 'paper':
            switch (computerChoice) {
                case 'rock':
                    console.log('You win');
                    result = true;
                    break;
                
                case 'paper':
                    console.log('Tie');
                    break;

                case 'scissors':
                    console.log('You lose');
                    break;
                
                default:
                    console.log('Some error happened');
                    break;
            }

            break;
        
        case 'scissors':
            switch (computerChoice) {
                case 'rock':
                    console.log('You lose');
                    break;
                
                case 'paper':
                    console.log('You win');
                    result = true;
                    break;
                
                case 'scissors':
                    console.log('Tie');
                    break;

            }

            break;
    
        default:
            console.log('Some error happened');
            break;
    }
    return result;
}


function playGame() {
    let winScore = 0;
    console.log("You get 1 point for each win against computer. Good luck!");

    for (let index = 0; index < 5; index++) {
        console.log(`Round ${index + 1}`);
        
        result = play(getPlayerChoice(), getComputerChoice());

        if (result) {
            winScore++;
        }
    }

    console.log(`Your score is ${winScore} and computer's score is ${5 - winScore}`);
}

console.clear;

playGame();