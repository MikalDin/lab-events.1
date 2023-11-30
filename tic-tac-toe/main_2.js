function makeBoard () {
const board = document.getElementById('board');
board.innerHtml = '';

for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.classList('square', 'empty');
    square.textContent = '';
    board.appendChild(square);
    square.dataset.index = i.toString();
        }
    }

    let currentPlayer = 'X';

    function makeMove(event) {
        const square = event.target;

        if (square.classList.contains('empty')) {
            square.textContent = currentPlayer;
            square.classList.remove('empty');


          if (checkWinner()) {
            alert(`${currentPlayer }wins!`);
            reset();
          } else { 
            currentPlayer = currentPlayer === 'X' ? '0' : 'X';
            }
        }
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2 ,4, 6]
        ];
        for  (let combination of winningCombinations) {
                const squares = combination.map( index => document.querySelector(`.square[data-index="${index}"]`));
                const allSame = squares.every(square => square.textContent === currentPlayer && square.textContent);
                if(allSame) {
                    return true;
                }
        }

        return false;
    }
    function reset() {
        makeBoard();
        currentPlayer = 'X';
    }

        document.addEventListener('DOMContentLoaded', makeBoard);

    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', reset);


