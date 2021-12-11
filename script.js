const primeiraCor = document.getElementById('cor1');
const segundaCor = document.getElementById('cor2');
const terceiraCor = document.getElementById('cor3');
const quartaCor = document.getElementById('cor4');
const seletorRgb = document.getElementById('color2');
const inputPixelBoard = document.getElementById('board-size');
const quadro = inputPixelBoard.value;

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

function colors() {
  primeiraCor.style.backgroundColor = 'Black';
  segundaCor.style.backgroundColor = 'orange';
  terceiraCor.style.backgroundColor = 'red';
  quartaCor.style.backgroundColor = 'green';
}
colors();

function pickColor(event) {
  const dfault = document.querySelector('.selected');
  dfault.classList.remove('selected');
  event.target.classList.add('selected');
}
primeiraCor.addEventListener('click', pickColor);
segundaCor.addEventListener('click', pickColor);
terceiraCor.addEventListener('click', pickColor);
quartaCor.addEventListener('click', pickColor);
seletorRgb.addEventListener('click', pickColor);
