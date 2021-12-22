// Quadro de cores
const colorPallete = document.querySelector('#color-palette');
const primeiraCor = document.getElementById('cor1');
const segundaCor = document.getElementById('cor2');
const terceiraCor = document.getElementById('cor3');
const quartaCor = document.getElementById('cor4');
const seletorRgb = document.getElementById('color2');

function colors() {
  primeiraCor.style.backgroundColor = 'Black';
  segundaCor.style.backgroundColor = 'orange';
  terceiraCor.style.backgroundColor = 'red';
  quartaCor.style.backgroundColor = 'green';
}
colors();

// Criar o quadro de pixels
const boardSize = document.querySelector('#board-size');
const quadro = boardSize.value;

function generateBoard() {
  for (let i = 0; i < quadro; i += 1) {
    const horizontal = document.createElement('div');
    horizontal.classList.add('horizontal');
    document.getElementById('pixel-board').appendChild(horizontal);

    for (let index = 0; index < quadro; index += 1) {
      const vertical = document.createElement('div');
      vertical.classList.add('pixel');
      horizontal.appendChild(vertical);
    }
  }
}
generateBoard();

// Selecionar a cor

function pickColor(event) {
  const defaultColor = document.querySelector('.selected');
  defaultColor.classList.remove('selected');
  event.target.classList.add('selected');
}
colorPallete.addEventListener('click', pickColor);
seletorRgb.addEventListener('click', pickColor);

// Pintar o quadro
const pixelEmpty = document.getElementsByClassName('pixel');

function paintedPixel(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

for (pixels of pixelEmpty) {
  pixels.addEventListener('click', paintedPixel);
}

// Botão de limpar o quadro

const resetButton = document.querySelector('#clear-board');
const pixelClear = document.querySelectorAll('.pixel');
function reset() {
  for (let index = 0; index < pixelClear.length; index += 1) {
    pixelClear[index].style.backgroundColor = 'white';
  }
}
resetButton.addEventListener('click', reset);
