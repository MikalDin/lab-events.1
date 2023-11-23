const paletteColors = document.querySelectorAll(#palette .color);

paletteColors.forEach(color => {
    color.addEventListener('click', () => {
        const currentColor = document.querySelector(#current-color);
        currentColor.style.backgroundColor = color.style.backgroundColor;
    });
});