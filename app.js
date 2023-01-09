//state
const state = {
    currentPlayer: '',
    playerOneName: '',
    playerTwoName: '',
    players: ['X','O'],
    board: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ],
    turn: 0,
    count: 0,
    computer: 0,
    
}



//Dom selectors
const enterPlayerOneNameButton = document.getElementById('enter-player1name-button');
enterPlayerOneNameButton.style.visibility = 'hidden';
const enterPlayerTwoNameButton = document.getElementById('enter-player2name-button');
enterPlayerTwoNameButton.style.visibility = 'hidden';
let playerOneNameH3 = document.getElementById('player-one');
playerOneNameH3.style.visibility = 'hidden';
let playerTwoNameH3 = document.getElementById('player-two');
playerTwoNameH3.style.visibility = 'hidden';
const playerOneInput = document.getElementById('player1-input');
playerOneInput.style.visibility = 'hidden';
const playerTwoInput = document.getElementById('player2-input');
playerTwoInput.style.visibility = 'hidden';
const onePlayerButton = document.getElementById('one-player-button');
const twoPlayerButton = document.getElementById('two-player-button');
const playersQuestion = document.getElementById('players-question');
const main = document.getElementsByTagName('main')[0];
const playerComputer = document.getElementById('Computer-player');
playerComputer.style.visibility = 'hidden';
const restartButton = document.getElementById('restart-button');





//helper function
let switchPlayers = () => {
    if( state.turn === 0 ){
        state.players = 'X';
        state.currentPlayer = state.playerOneName;
        state.turn = 1;
    }
  else {
        state.players = 'O';
        state.currentPlayer = state.playerTwoName;
        state.turn = 0;  
    }

}


const gameBoardDiv = () => {
    for(let i = 0; i < state.board.length; i++) {

        for(let j = 0; j < state.board[i].length; j++){
   
            const newGameDiv = document.createElement('div');
            newGameDiv.setAttribute('class', 'new-board-div');
    
            main.appendChild(newGameDiv);

            newGameDiv.addEventListener('click', () => {
                if(newGameDiv.innerText === ''){
                    switchPlayers(); 
                    newGameDiv.innerText = state.players;
                    state.board[i][j] = newGameDiv.innerText;
                    winConditions(state.currentPlayer);

                    //computer player function (not working)
                    if(state.computer === 1 && state.turn === 1){                          
                        for(let i = 0; i < 10; i++){
                        if(state.board.innerText === state.players[0].innerText){
                            let a = i
                            let b = j

                            if(state.board[a][b].innerText === state.players[0].innerText){
                            state.board[a][b+1]
                            if(b = 2){
                                b = 0
                                a += 1    
                            }
                            if(state.board[a][b] === null){
                            state.count += 1
                            state.turn = 0
                            state.board[a][b].innerText = state.players[1].innerText
                            newGameDiv = state.board[a][b].innerText
                            break
                            }
                            
                        
                            }
 
                        }
                        }
                        
                        
                    }
                

                }  
                  
            })
            
        

        

                restartButton.addEventListener('click', () => {
                        state.count = 0;
                        state.turn = 0;
                        newGameDiv.innerText = null;
                        state.board[i][j] = newGameDiv;

                        const enterPlayerOneNameButton = document.getElementById('enter-player1name-button');
                        enterPlayerOneNameButton.style.visibility = 'hidden';
                        const enterPlayerTwoNameButton = document.getElementById('enter-player2name-button');
                        enterPlayerTwoNameButton.style.visibility = 'hidden';
                        let playerOneNameH3 = document.getElementById('player-one');
                        playerOneNameH3.style.visibility = 'hidden';
                        let playerTwoNameH3 = document.getElementById('player-two');
                        playerTwoNameH3.style.visibility = 'hidden';
                        const playerOneInput = document.getElementById('player1-input');
                        playerOneInput.style.visibility = 'hidden';
                        const playerTwoInput = document.getElementById('player2-input');
                        playerTwoInput.style.visibility = 'hidden';
                        const onePlayerButton = document.getElementById('one-player-button');
                        onePlayerButton.style.visibility = 'visible'
                        const twoPlayerButton = document.getElementById('two-player-button');
                        twoPlayerButton.style.visibility = 'visible'
                        const playersQuestion = document.getElementById('players-question');
                        playersQuestion.style.visibility = 'visible'
                        const playerComputer = document.getElementById('Computer-player');
                        playerComputer.style.visibility = 'hidden';

                        
                })
        }
        } 
}    



const rowCheck = () => {
    if(state.board[0][0] === state.players && state.board[0][1] === state.players && state.board[0][2] === state.players){
        alert(`${state.currentPlayer} wins!`);
        state.count -= 1;
    }
     if(state.board[1][0] === state.players && state.board[1][1] === state.players && state.board[1][2] === state.players){
         alert(`${state.currentPlayer} wins!`);
         state.count -= 1;
     }
     if(state.board[2][0] === state.players && state.board[2][1] === state.players && state.board[2][2] === state.players){
         alert(`${state.currentPlayer} wins!`);
         state.count -= 1;
    }
    
}

let diagCheck = () => {
     if(state.board[0][0] === state.players && state.board[1][1] === state.players && state.board[2][2] === state.players){
         alert(`${state.currentPlayer} wins!`);
         state.count -= 1;
     }   
     if(state.board[0][2] === state.players && state.board[1][1] === state.players && state.board[2][0] === state.players){
         alert(`${state.currentPlayer} wins!`);
         state.count -= 1;
     }
}

let columnCheck = () => {
    if(state.board[0][0] === state.players && state.board[1][0] === state.players && state.board[2][0] === state.players){
        alert(`${state.currentPlayer} wins!`);
        state.count -= 1;
    }
    if(state.board[0][1] === state.players && state.board[1][1] === state.players && state.board[2][1] === state.players){
        alert(`${state.currentPlayer} wins!`);
        state.count -= 1;
    }
    if(state.board[0][2] === state.players && state.board[1][2] === state.players && state.board[2][2] === state.players){
        alert(`${state.currentPlayer} wins!`);
        state.count -= 1;
    }
}

let draw = () => {
    state.count += 1;
    if(state.count === 9){
    alert(`draw`);
    } 
  
    
    
}

//Dom listeners
onePlayerButton.addEventListener('click', () => {
    const enterPlayerOneNameButton = document.getElementById('enter-player1name-button').style.visibility = 'visible';
    const playerOneInput = document.getElementById('player1-input').style.visibility = 'visible';
    const playersQuestion = document.getElementById('players-question').style.visibility = 'hidden';
    const onePlayerButton = document.getElementById('one-player-button').style.visibility = 'hidden';
    const twoPlayerButton = document.getElementById('two-player-button').style.visibility = 'hidden';
    playerComputer.style.visibility = 'visible';
    
    state.computer = 1


})


twoPlayerButton.addEventListener('click', () => {
    const enterPlayerOneNameButton = document.getElementById('enter-player1name-button').style.visibility = 'visible';
    const playerOneInput = document.getElementById('player1-input').style.visibility = 'visible';
    const enterPlayerTwoNameButton = document.getElementById('enter-player2name-button').style.visibility = 'visible';
    const playerTwoInput = document.getElementById('player2-input').style.visibility = 'visible';
    const playersQuestion = document.getElementById('players-question').style.visibility = 'hidden';
    const onePlayerButton = document.getElementById('one-player-button').style.visibility = 'hidden';
    const twoPlayerButton = document.getElementById('two-player-button').style.visibility = 'hidden';


    
})

enterPlayerOneNameButton.addEventListener('click', () => {
    let playerOneName = playerOneInput.value;
    const message = 'Player 1:';
    playerOneNameH3.innerText = `${message} ${playerOneInput.value}`;
    state.playerOneName = playerOneName;
    playerOneInput.style.visibility = 'visible';
    playerOneNameH3.style.visibility = 'visible';
    playerOneInput.value = '';
   
})


enterPlayerTwoNameButton.addEventListener('click', () => {
    let playerTwoName = playerTwoInput.value;
    state.playerTwoName = playerTwoName
    playerOneNameH3.style.visibility = 'visible';
    playerOneInput.style.visibility = 'visible';
    playerTwoNameH3.style.visibility = 'visible';
    playerTwoInput.style.visibility = 'visible';
    const message = 'Player 2:';
    playerTwoNameH3.innerText = `${message} ${playerTwoInput.value}`;
    playerTwoInput.value = '';


})




let winConditions = () => {
    rowCheck();
    columnCheck();
    diagCheck();
    draw();

    
}


//initial setup

gameBoardDiv();
