// Quadro de cores + cores aleatórias

const colorPallete = document.querySelector('#color-palette');
const firstColor = document.getElementById('cor1');
const secondColor = document.getElementById('cor2');
const thirdColor = document.getElementById('cor3');
const fourthColor = document.getElementById('cor4');

// Source: https://stackoverflow.com/questions/1484506/random-color-generator
const letters = '0123456789ABCDEF';
let color2 = '#';
let color3 = '#';
let color4 = '#';

function randomColor() {
  for (let index = 0; index < 6; index += 1) {
    color2 += letters[Math.floor(Math.random() * 16)];
    color3 += letters[Math.floor(Math.random() * 16)];
    color4 += letters[Math.floor(Math.random() * 16)];
  }
}
randomColor();

function colors() {
  firstColor.style.backgroundColor = 'Black';
  secondColor.style.backgroundColor = color2;
  thirdColor.style.backgroundColor = color3;
  fourthColor.style.backgroundColor = color4;
}
colors();

// Criar o quadro de pixels

let quadro = 5;

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

// Pintar o quadro

const pixelEmpty = document.getElementsByClassName('pixel');

function paintedPixel(event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function clickPaint() {
  for (pixels of pixelEmpty) {
    pixels.addEventListener('click', paintedPixel);
  }
}
clickPaint();

// Botão de limpar o quadro

const resetButton = document.querySelector('#clear-board');
const pixelClear = document.querySelectorAll('.pixel');

function reset() {
  for (let index = 0; index < pixelClear.length; index += 1) {
    pixelClear[index].style.backgroundColor = 'white';
  }
}
reset();
resetButton.addEventListener('click', reset);

// Tamanho do quadro personalizado

const vqvButton = document.querySelector('#generate-board');

function invalidBoard() {
  const boardSize = document.getElementById('board-size');
  if (!boardSize.value === true) {
    alert('Board inválido!');
    // return false;
  }
  if (boardSize.value < 5) {
    boardSize.value = 5;
    quadro = boardSize.value;
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
    quadro = boardSize.value;
  } else {
    quadro = boardSize.value;
  }
}

function customBoard() {
  const boardSection = document.getElementById('pixel-board');
  boardSection.innerHTML = '';
  invalidBoard();
  generateBoard();
  clickPaint();
}

vqvButton.addEventListener('click', customBoard);
