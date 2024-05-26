const refs = {
  inp: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}
let amount = 0;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.inp.addEventListener('input', () => {
  amount = refs.inp.value;
});

refs.createBtn.addEventListener('click', ()=> {
  if (refs.inp.value === '') {
    destroyBoxes();
  } else if (amount >= 1 && amount <= 100) {
      destroyBoxes();
      createBoxes(amount);
      refs.boxes.style.padding = '30px'
  }
});

refs.destroyBtn.addEventListener('click', ()=> {
  destroyBoxes()
});

function createBoxes(amount) {
  let size = 30;
  for(let i = 1; i <= amount; i++)  {
    refs.boxes.insertAdjacentHTML("beforeend", `<div class="box" style="background-color: ${getRandomHexColor()}; width:${size}px; height: ${size}px;"></div>`);
    size += 10;
  }
}

function destroyBoxes() {
  refs.inp.value = '';
  refs.boxes.innerHTML = '';
  refs.boxes.style.removeProperty('padding');
}


