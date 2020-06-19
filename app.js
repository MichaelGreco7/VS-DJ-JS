const square = document.getElementById('square');
const container = document.getElementById('container');
// square.style.backgroundColor = 'blue';

container.addEventListener('wheel', function () {
  square.style.backgroundColor = 'orange';
});

square.addEventListener('mouseleave', function () {
  square.style.backgroundColor = '#b49fcc';
});

square.addEventListener('mouseover', function () {
  square.style.backgroundColor = 'blue';
});

square.addEventListener('mousedown', function () {
  square.style.backgroundColor = 'red';
});

square.addEventListener('mouseup', function () {
  square.style.backgroundColor = 'yellow';
});

square.addEventListener('dblclick', function () {
  square.style.backgroundColor = 'green';
});

addEventListener('keydown', function (event) {
  if (event.which === 66) {
    square.style.backgroundColor = 'blue';
  }
});

addEventListener('keydown', function (event) {
  if (event.which === 82) {
    square.style.backgroundColor = 'red';
  }
});

addEventListener('keydown', function (event) {
  if (event.which === 89) {
    square.style.backgroundColor = 'yellow';
  }
});

addEventListener('keydown', function (event) {
  if (event.which === 71) {
    square.style.backgroundColor = 'green';
  }
});

addEventListener('keydown', function (event) {
  if (event.which === 79) {
    square.style.backgroundColor = 'orange';
  }
});

// b = 66
// r = 82
// y = 89
// g = 71
// o = 79
