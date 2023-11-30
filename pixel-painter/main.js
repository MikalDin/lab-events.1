const board = document.querySelector('#board')
const colorPicker = document.getElementById('color-picker');
const squares = document.querySelectorAll('.square');

// full an array with random colors
for(let i = 0; i<100; i++) {
  let color = Math.floor((Math.random()*10000000)+1);
  if (colorArray.indexOf(color) >= 0) {
    i--;
  } else {
    colorArray.push("#" + ('000000' + color.toString(16)).slice(-6));
  }
}



const SQUARE_NUMBER = 625;

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener("mouseover", () => setColor(square))
  square.addEventListener("mouseleave", () => removeColor(square))

  board.append(square);
}
function setColor(element) {
  const color = getRndmColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color},
  0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1b1b1b';
  element.style.boxShadow = `0 0 2px #000`
}

function getRndmColor() {
  return colorArray[Math.round(Math.random() * colorArray.length - 1)]
}

    const resetAllSquaresBtn = document.getElementById("resetAllSquares");
    resetAllSquaresBtn.addEventListener("click", () => {
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => {
            square.style.backgroundColor = "#1b1b1b";
        });
    });

    const fillAllSquaresBtn = document.getElementById("fillAllSquares");
    fillAllSquaresBtn.addEventListener("click", () => {
        const currentColor = colorPicker.value; 
        squares.forEach((square) => {
            square.style.backgroundColor = currentColor;
        });
    });
// document.addEventListener("DOMContentLoaded", () => {
//     const paletteColors = document.querySelectorAll("#palette .color");
//     const currentColorElement = document.getElementById("current-color");
//     const canvas = document.getElementById("canvas");
//     const cells = document.querySelectorAll(".cell");

//     window.onload = function() {
// // document.addEventListener("DOMContentLoaded", () => {

//     paletteColors.forEach((color) => {
//         color.addEventListener("click", () => {
//           const selectedColor = color.style.backgroundColor; // Use 'backgroundColor' instead of 'background'
//           document.getElementById("current-color").style.backgroundColor = selectedColor;
//         });
//       })};

//       let isClicking = false;


//       canvas.addEventListener("mousedown", () => {
//         isMouseDown = true;
//       });
      
//       canvas.addEventListener("mouseup", () => {
//         isMouseDown = false;
//       });

//       canvas.addEventListener("click", (event) => {
//             if (isMouseDown) {
//                 const currentColor = document.getElementById("current-color").style.backgroundColor;
//                 event.target.style.backgroundColor = currentColor;
//             }

//       });
      
//       const cells = document.querySelectorAll(".cell");
//       cells.forEach((cell) => {
//         cell.addEventListener("click", () => {
//           if (isMouseDown) {
//             const currentColor = document.getElementById("current-color").style.backgroundColor;
//             cell.style.backgroundColor = currentColor;
//           }
//         });
//       });

//             canvas.addEventListener("click", (event) => {
//         if (isMouseDown) {
//           const currentColor = currentColorElement.style.backgroundColor;
//           event.target.style.backgroundColor = currentColor;
//         }
//       });

//     paletteColors.forEach((color) => {
//         color.addEventListener("click", () => {
//             const selectedColor = color.style.backgroundColor;
//            document.getElementById("current-color").style.backgroundColor = selectedColor;
//         });
//     });

//     cells.forEach((cell) => {
//         cell.addEventListener("click", () => {
//             const currentColor = currentColorElement.style.backgroundColor;
//             cell.style.backgroundColor = currentColor;
//         });

//         cell.addEventListener("mouseover", (event) => {
//             if (event.buttons === 1) {
//                 const currentColor = currentColorElement.style.backgroundColor;
//                 event.target.style.backgroundColor = currentColor;
//             }
//         });
//     });

//     const resetAllCellsBtn = document.getElementById("resetAllCells");
//     resetAllCellsBtn.addEventListener("click", () => {
//         cells.forEach((cell) => {
//             cell.style.backgroundColor = "white";
//         });
//     });

//     const fillAllCellsBtn = document.getElementById("fillAllCells");
//     fillAllCellsBtn.addEventListener("click", () => {
//         const currentColor = currentColorElement.style.backgroundColor;
//         cells.forEach((cell) => {
//             cell.style.backgroundColor = currentColor;
//         });
//     });
// });
