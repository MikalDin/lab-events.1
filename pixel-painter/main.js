document.addEventListener("DOMContentLoaded", () => {
    const paletteColors = document.querySelectorAll("#palette .color");
    const canvas = document.getElementById("canvas");

    paletteColors.forEach((color) =>  {
        color.addEventListener("click", () => {
            const selectedColor = color.style.background;
            document.getElementById("current-color").style.background = selectedColor;
        });

    });


const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        const currentColor = document.getElementById("current-color").style.background;
        cell.style.background = currentColor;
        });
    });
    
    canvas.addEventListener("click", () => {
        const currentColor = document.getElementById("current-color").style.background;
        canvas.style.backgroundColor = currentColor;

    });
    
});