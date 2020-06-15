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
