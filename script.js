const paletaDeCores = document.querySelectorAll('.color');
const board = document.querySelector('#pixel-board');
const sizeBoard = document.querySelector('#board-size');
const tamanho = sizeBoard.value;

function paletteColors() {
  paletaDeCores[0].style.backgroundColor = 'black';
  paletaDeCores[1].style.backgroundColor = 'green';
  paletaDeCores[2].style.backgroundColor = 'red';
  paletaDeCores[3].style.backgroundColor = 'purple';
}
paletteColors();

function pixelBoard(size) {
  board.style.setProperty('--size', size);
  for (let i = 0; i < size * size; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    board.appendChild(div);
  }
}
pixelBoard(tamanho);

function pickColor(event) {
  const dfault = document.querySelector('.selected');
  dfault.classList.remove('selected');
  event.target.classList.add('selected');
}
window.addEventListener('click', pickColor);
