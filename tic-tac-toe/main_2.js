window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = ['','','','','','','','',''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = "PLAYERO_WON";
    const TIE = 'TIE';


    const winningConditions = [
        [0, 1, 2],
        [3 ,4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[1];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            if (a === '' || b === ''|| c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        if (roundWon) {
                announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
                isGameActive = false;
                return;
            }

        if (!board.includes(''))
            annonce(TIE);
        }
        const annonce = (type) => {
            switch(type) {
                case PLAYERO_WON:
                    announcer.innerHTML = 'Player <span class="player0">0</span> Won';
                   break;
                case PLAYERX_WON:
                    announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                    break;
                    case TIE:
                        announceer.innerText = 'Tie';
        }

    announcer.classList.remove('hide');
    };

    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === '0') {
            return false;
         }
         return true;
        };

        const updateBoard = (index) => {
            board[index]= currentPlayer;

        }
        const changePlayer = () => {
            playerDisplay.classList.remove(`player${currentPlayer}`);
            currentPlayer = currentPlayer === 'X' ? '0' : 'X';
            playerDisplay.innerText = currentPlayer;
            playerDisplay.classList.add(`player${currentPlayer}`);
        }
        const userAction = (tile, index) => {
                if(isValidAction(tile) && isGameActive) {
                        tile.innerText = currentPlayer;
                        tile.classList.add(`player${currentPlayer}`);
                        updateBoard(index);
                        handleResultValidation();
                        changePlayer();
                }
            }
                const resetBoard = () => {
                    board = ['', '', '', '','','', '',''];
                    isGameActive = true;
                    announcer.classList.add('hide');

                    if (currentPlayer === 'O') {
                        changePlayer();
                    }
                   
                    tiles.forEach(tile => {
                        tile.innerText = '';
                        tile.classList.remove('playerX');
                        tile.classList.remove('playerO');
                    });                        
                    }
                
                tiles.forEach( (tile, index) => {
                        tile.addEventListener('click', () => userAction(tile, index));
                    });
                        resetButton.addEventListener( 'click', resetBoard);

                });
                    

// function makeBoard () {
// const board = document.getElementById('board');
// board.innerHtml = '';

// for (let i = 0; i < 9; i++) {
//     const square = document.createElement('div');
//     square.classList('square', 'empty');
//     square.textContent = '';
//     board.appendChild(square);
//     square.dataset.index = i.toString();
//         }
//     }

//     let currentPlayer = 'X';

//     function makeMove(event) {
//         const square = event.target;

//         if (square.classList.contains('empty')) {
//             square.textContent = currentPlayer;
//             square.classList.remove('empty');


//           if (checkWinner()) {
//             alert(`${currentPlayer }wins!`);
//             reset();
//           } else { 
//             currentPlayer = currentPlayer === 'X' ? '0' : 'X';
//             }
//         }
//     }

//     function checkWinner() {
//         const winningCombinations = [
//             [0, 1, 2],
//             [3, 4, 5],
//             [6, 7, 8],
//             [0, 3, 6],
//             [1, 4, 7],
//             [2, 5, 8],
//             [0, 4, 8],
//             [2 ,4, 6]
//         ];
//         for  (let combination of winningCombinations) {
//                 const squares = combination.map( index => document.querySelector(`.square[data-index="${index}"]`));
//                 const allSame = squares.every(square => square.textContent === currentPlayer && square.textContent);
//                 if(allSame) {
//                     return true;
//                 }
//         }

//         return false;
//     }
//     function reset() {
//         makeBoard();
//         currentPlayer = 'X';
//     }

//         document.addEventListener('DOMContentLoaded', makeBoard);

//     const resetButton = document.getElementById('resetButton');
//     resetButton.addEventListener('click', reset);


